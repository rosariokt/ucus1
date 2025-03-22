
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path for GitHub Pages - gunakan nama repositori GitHub Anda 
  // atau '/' jika menggunakan custom domain
  base: mode === 'production' ? './' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.md"],
  // Configuration for Static Site Generation
  build: {
    outDir: 'dist',
    // Ensure relative assets work correctly
    assetsDir: 'assets',
    emptyOutDir: true,
    // Optimize for static hosting
    minify: 'terser',
    sourcemap: false,
    // Enable for GitHub Pages compatibility
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          ui: ['@radix-ui/react-toast', '@radix-ui/react-tooltip', 'sonner'],
        }
      }
    }
  },
}));
