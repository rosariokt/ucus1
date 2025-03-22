
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Tunggu sampai DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', () => {
  // Periksa jika kita berada dalam mode statis
  if (window.__DISABLE_HYDRATION__) {
    console.log("Static mode active - hydration disabled");
    // Tidak perlu melakukan apa-apa karena konten sudah di-render sebagai HTML statis
    return;
  }
  
  // Jika tidak, lakukan rendering normal (ini hanya untuk pengembangan)
  const rootElement = document.getElementById('root');
  if (rootElement) {
    createRoot(rootElement).render(
      <React.StrictMode>
        <App initialState={{ isStatic: true, isBrowser: true, isClient: true }} />
      </React.StrictMode>
    );
  }
});
