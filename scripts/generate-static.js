
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Daftar rute yang akan di-pre-render
const routes = [
  '/',
  '/categories',
  '/categories/:category',
  '/popular',
  '/contact',
  '/privacy',
  '/terms',
  '/academic-resources',
  '/academic-resources/citation-guidelines',
  '/academic-resources/research-methodology',
  '/academic-resources/academic-writing',
  '/academic-resources/peer-review-process',
  '/search',
  '/categories/ach',
  '/ach/full-72092',
  '/ach/full-77956',
  '/ach/full-111112',
  '/ach/full-122593',
  '/404'
];

async function generateStaticPages() {
  const distPath = path.resolve(__dirname, '../dist');
  
  // Baca HTML template
  let template = fs.readFileSync(
    path.resolve(__dirname, '../index.html'),
    'utf-8'
  );
  
  console.log('Generating static pages...');
  
  for (const route of routes) {
    console.log(`Generating: ${route}`);
    
    // Buat preloaded state untuk menonaktifkan hydration dan memastikan full static
    const preloadedState = { 
      isStatic: true,
      isBrowser: false,
      isClient: false,
      renderTime: new Date().toISOString()
    };
    
    // Render React component ke string HTML dengan StaticRouter
    const appHtml = renderToString(
      React.createElement(StaticRouter, { location: route },
        React.createElement(App, { initialState: preloadedState })
      )
    );
    
    // Sisipkan HTML ke template
    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );
    
    // Tambahkan script untuk mencegah hydration
    html = html.replace(
      '<!--preloadedState-->',
      `<script id="__PRELOADED_STATE__">
        window.__PRELOADED_STATE__ = ${JSON.stringify({
          ...preloadedState,
          isBrowser: true,
          isClient: true,
          isStatic: true
        })};
        window.__DISABLE_HYDRATION__ = true;
      </script>`
    );
    
    // Tentukan path output
    let outputPath;
    if (route === '/') {
      outputPath = path.resolve(distPath, 'index.html');
    } else if (route === '/404') {
      outputPath = path.resolve(distPath, '404.html');
    } else if (route.includes(':')) {
      // Jika rute memiliki parameter dinamis, kita perlu membuat folder khusus
      const dynamicRoute = route.replace(/:\w+/g, '_params');
      const targetDir = path.resolve(distPath, dynamicRoute.substring(1));
      fs.mkdirSync(targetDir, { recursive: true });
      outputPath = path.resolve(targetDir, 'index.html');
      console.log(`Dynamic route: creating ${outputPath}`);
    } else {
      // Buat direktori nested jika diperlukan
      const targetDir = path.resolve(distPath, route.substring(1));
      fs.mkdirSync(targetDir, { recursive: true });
      outputPath = path.resolve(targetDir, 'index.html');
    }
    
    // Tulis file HTML
    fs.writeFileSync(outputPath, html);
    console.log(`Generated: ${outputPath}`);
  }
  
  // Tambahkan file .nojekyll untuk GitHub Pages
  fs.writeFileSync(path.resolve(distPath, '.nojekyll'), '');
  console.log('Created .nojekyll file for GitHub Pages');
  
  console.log('Static site generation completed!');
}

generateStaticPages().catch(console.error);
