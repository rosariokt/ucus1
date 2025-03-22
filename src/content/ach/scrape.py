import os
import re
import requests
import threading
import time
from bs4 import BeautifulSoup
from urllib.parse import urlparse
from html import escape
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

# Konfigurasi
CONFIG = {
    'max_threads': 10,
    'output_dir': 'result',
    'allowed_domains': ['ojs.unud.ac.id'],
    'user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'request_timeout': 20,
    'retries': 3,
    'base_canonical_url': 'https://jurnal.harianregional.com/ach',
    'delay': 1  # Delay antar request dalam detik
}

def validate_url(url):
    """Validasi URL sebelum diproses"""
    parsed = urlparse(url)
    if not parsed.scheme or parsed.scheme not in ('http', 'https'):
        raise ValueError(f"Invalid URL scheme: {url}")
    if parsed.netloc not in CONFIG['allowed_domains']:
        raise ValueError(f"Domain not allowed: {parsed.netloc}")
    return True

def enhanced_escape(text):
    """Escape karakter khusus untuk Markdown dan YAML"""
    replacements = {
        '\"': '\\"',
        '\'': '\\\'',
        '\\': '\\\\',
        '\n': ' ',
        '\t': ' ',
        ':': '\\:',
        '[': '\\[',
        ']': '\\]'
    }
    for char, replacement in replacements.items():
        text = text.replace(char, replacement)
    return escape(text)

def safe_get_text(element, default="Tidak tersedia"):
    """Ambil teks dengan nilai default jika elemen tidak ada"""
    return element.get_text(strip=True) if element else default

def extract_article_id(url):
    """Ekstrak ID artikel dari URL dengan error handling"""
    match = re.search(r'\d+$', url)
    if not match:
        raise ValueError(f"Invalid article URL format: {url}")
    return match.group()

def clean_html_content(html_content):
    """Pembersihan konten HTML menggunakan BeautifulSoup"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Hapus element yang tidak diperlukan
    for element in soup(['script', 'style', 'nav', 'footer', 'header', 'iframe', 'form']):
        element.decompose()
        
    # Ekstrak teks dengan struktur dasar
    text_parts = []
    for tag in ['h1', 'h2', 'h3', 'p', 'div']:
        for element in soup.find_all(tag):
            text = element.get_text(' ', strip=True)
            if text:
                text_parts.append(text)
    
    return ' '.join(text_parts) or 'Konten tidak tersedia'

def extract_metadata(soup, url):
    """Ekstrak semua metadata termasuk citation dan issue details"""
    metadata = {
        'citation': 'Tidak tersedia',
        'issue': {'title': 'Tidak tersedia', 'url': '#'},
        'section': 'Tidak tersedia',
        'issn': 'Tidak tersedia',
        'journal': 'Archive of Community Health',
        'pages': 'Tidak tersedia',
        'volume': 'Tidak tersedia',
        'doi': '#',
        'keywords': [],
        'canonical_url': '#'
    }

    try:
        # Citation Information
        citation_div = soup.find("div", id="citationOutput")
        if citation_div:
            citation_text = citation_div.get_text(separator=' ', strip=True)
            metadata['citation'] = re.sub(r'\s+', ' ', citation_text)
            
            # Ekstrak ISSN
            issn_match = re.search(r'ISSN\s+(\d{4}-\d{4})', citation_text)
            metadata['issn'] = issn_match.group(1) if issn_match else 'Tidak tersedia'
            
            # Ekstrak halaman
            pages_match = re.search(r'p\.\s+(\d+\s+-\s+\d+)', citation_text)
            metadata['pages'] = pages_match.group(1) if pages_match else 'Tidak tersedia'
            
            # Ekstrak volume
            vol_match = re.search(r'v\.\s+(\d+)', citation_text)
            metadata['volume'] = vol_match.group(1) if vol_match else 'Tidak tersedia'

        # Issue and Section Details
        issue_div = soup.find("div", class_="item issue")
        if issue_div:
            issue_link = issue_div.find("a", class_="title")
            if issue_link:
                metadata['issue']['title'] = safe_get_text(issue_link)
                metadata['issue']['url'] = issue_link.get('href', '#')
            
            section_label = issue_div.find("div", class_="label", string=lambda t: t and 'Section' in t)
            if section_label:
                section_value = section_label.find_next_sibling("div", class_="value")
                metadata['section'] = safe_get_text(section_value)

        # DOI Information
        doi_div = soup.find("div", class_="item doi")
        if doi_div:
            doi_link = doi_div.find("a")
            if doi_link:
                metadata['doi'] = doi_link.get('href', '#')

        # Keywords
        abstract_div = soup.find("div", class_="item abstract")
        if abstract_div:
            keywords_match = re.search(r'(?i)(Kata Kunci|Keywords):\s*(.*?)(?:\n|$)', abstract_div.get_text())
            if keywords_match:
                metadata['keywords'] = [kw.strip() for kw in keywords_match.group(2).split(',')]

        # ID Artikel
        article_id = extract_article_id(url)
        metadata['canonical_url'] = f"{CONFIG['base_canonical_url']}/full-{article_id}"

    except Exception as e:
        print(f"Error extracting metadata: {str(e)}")
    
    return metadata

def generate_markdown_content(metadata, authors, abstract, download_url):
    """Generate full Markdown content dengan semua metadata"""
    return f"""---
layout: full_article
title: "{enhanced_escape(metadata.get('title', 'Judul Tidak Tersedia'))}"
authors: {[enhanced_escape(a) for a in authors]}
journal: "{enhanced_escape(metadata['journal'])}"
issn: "{metadata['issn']}"
volume: "{metadata['volume']}"
pages: "{metadata['pages']}"
section: "{enhanced_escape(metadata['section'])}"
doi: "{metadata['doi']}"
canonical_url: "{metadata['canonical_url']}"
published_date: "{metadata.get('published_date', 'Tanggal tidak tersedia')}"
categories: ach
tags: {[enhanced_escape(kw) for kw in metadata['keywords']]}
---

## Authors
{', '.join(authors) if authors else 'Penulis tidak tersedia'}

## Publication Details
**Journal**: {metadata['journal']}  
**ISSN**: {metadata['issn']}  
**Volume**: {metadata['volume']}  
**Pages**: {metadata['pages']}  
**Section**: {metadata['section']}  
**Issue**: [{metadata['issue']['title']}]({metadata['issue']['url']})

## Abstract
{clean_html_content(abstract)}

## Citation
{metadata['citation']}

## Downloads
[Download PDF]({download_url if download_url else '#'})

## DOI
{metadata['doi']}
"""

def process_article(url):
    result = {'url': url, 'success': False, 'error': ''}
    try:
        validate_url(url)
        article_id = extract_article_id(url)
        
        # Setup session dengan retry
        session = requests.Session()
        retries = Retry(
            total=CONFIG['retries'],
            backoff_factor=0.1,
            status_forcelist=[500, 502, 503, 504]
        )
        session.mount('https://', HTTPAdapter(max_retries=retries))
        
        response = session.get(
            url,
            headers={'User-Agent': CONFIG['user_agent']},
            timeout=CONFIG['request_timeout']
        )
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Ekstrak data utama dengan error handling
        title_element = soup.find("h1", class_="page_title")
        title = safe_get_text(title_element, "Judul Tidak Tersedia")
        
        authors_elements = soup.select(".item.authors .name, .authors .name, .author .name")
        authors = [safe_get_text(el) for el in authors_elements] if authors_elements else ["Penulis Tidak Ditemukan"]
        
        abstract_element = soup.find("div", class_="item abstract")
        abstract = safe_get_text(abstract_element, "Abstrak Tidak Tersedia")
        
        # Download URL dengan alternatif selector
        download_element = soup.select_one(".galleys_links a[href$='.pdf'], a.pdf, a.obj_galley_link")
        download_url = download_element['href'] if download_element and download_element.has_attr('href') else "#"
        
        # Published date dengan alternatif selector
        published_element = soup.select_one(".item.published .value, .published .value, .date")
        published_date = safe_get_text(published_element, "Tanggal Tidak Diketahui")
        
        # Ekstrak metadata lengkap
        metadata = extract_metadata(soup, url)
        metadata.update({
            'title': title,
            'published_date': published_date
        })
        
        # Generate konten dengan fallback
        markdown_content = generate_markdown_content(
            metadata=metadata,
            authors=authors,
            abstract=abstract,
            download_url=download_url
        )
        
        # Simpan file
        output_path = os.path.join(CONFIG['output_dir'], f"full-{article_id}.md")
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(markdown_content)
        
        result['success'] = True
    except Exception as e:
        result['error'] = f"{type(e).__name__}: {str(e)}"
    finally:
        time.sleep(CONFIG['delay'])  # Delay antar request
    return result

def threaded_processing(urls):
    """Thread processing dengan manajemen resource"""
    results = []
    lock = threading.Lock()
    
    def worker(url):
        try:
            result = process_article(url)
            with lock:
                results.append(result)
        except Exception as e:
            with lock:
                results.append({'url': url, 'success': False, 'error': str(e)})
    
    threads = []
    for url in urls:
        thread = threading.Thread(target=worker, args=(url,))
        threads.append(thread)
        thread.start()
        
        # Kontrol jumlah thread aktif
        while len([t for t in threads if t.is_alive()]) >= CONFIG['max_threads']:
            time.sleep(0.5)
    
    for thread in threads:
        thread.join()
    
    return results

def main():
    # Setup environment
    os.makedirs(CONFIG['output_dir'], exist_ok=True)
    
    # Load URLs
    try:
        with open("urls.txt", "r", encoding="utf-8") as f:
            urls = [line.strip() for line in f if line.strip()]
    except FileNotFoundError:
        print("Error: File urls.txt tidak ditemukan!")
        return
    
    # Proses dalam batch
    batch_size = 20
    all_results = []
    
    for i in range(0, len(urls), batch_size):
        batch = urls[i:i + batch_size]
        print(f"Processing batch {i//batch_size + 1}/{(len(urls)-1)//batch_size + 1}")
        batch_results = threaded_processing(batch)
        all_results.extend(batch_results)
    
    # Generate report
    success = [r['url'] for r in all_results if r['success']]
    failures = [r for r in all_results if not r['success']]
    
    report = f"""Scraping Report:
Total URLs: {len(urls)}
Success: {len(success)}
Failures: {len(failures)}

Failure Details:
"""
    for failure in failures:
        report += f"URL: {failure['url']}\nError: {failure['error']}\n\n"
    
    report_path = os.path.join(CONFIG['output_dir'], "scraping_report.txt")
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(report)
    
    print(f"\nProses selesai. Hasil disimpan di folder '{CONFIG['output_dir']}'")

if __name__ == "__main__":
    main()