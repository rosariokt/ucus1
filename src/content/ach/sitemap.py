import requests
from bs4 import BeautifulSoup
import re

def fetch_urls_from_sitemap(sitemap_url):
    try:
        response = requests.get(sitemap_url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, "html.parser")
            urls = [loc.text for loc in soup.find_all("loc")]
            return urls
        else:
            print("Failed to fetch sitemap:", response.status_code)
    except Exception as e:
        print("An error occurred:", e)
    return []

def filter_urls(urls):
    filtered_urls = []
    excluded_paths = ['/index/', '/about/', '/search/', '/issue/', '/about', '/search', '/issue']
    for url in urls:
        if not any(path in url for path in excluded_paths):
            filtered_urls.append(url)
    return filtered_urls

def save_urls_to_file(urls, filename="urls.txt"):
    try:
        # Pola untuk mencocokkan URL dengan download id
        pattern = r'https:\/\/ojs\.unud\.ac\.id\/index\.php\/ach\/article\/view\/\d+\/\d+'
        # Filter URLs that match the pattern
        filtered_urls = [url for url in urls if not re.search(pattern, url)]
        
        with open(filename, "w") as file:
            for url in filtered_urls:
                file.write(url + "\n")
        print("URLs saved to", filename)
    except Exception as e:
        print("An error occurred while saving URLs:", e)

def main():
    sitemap_url = "https://ojs.unud.ac.id/index.php/ach/sitemap"
    urls = fetch_urls_from_sitemap(sitemap_url)
    if urls:
        filtered_urls = filter_urls(urls)
        if filtered_urls:
            save_urls_to_file(filtered_urls)

if __name__ == "__main__":
    main()

