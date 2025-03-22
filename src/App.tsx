
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import Post from "./pages/Post";
import Category from "./pages/Category";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import AcademicResources from "./pages/academic/AcademicResources";
import CitationGuidelines from "./pages/academic/CitationGuidelines";
import ResearchMethodology from "./pages/academic/ResearchMethodology";
import AcademicWriting from "./pages/academic/AcademicWriting";
import PeerReviewProcess from "./pages/academic/PeerReviewProcess";
import Popular from "./pages/Popular";
import Contact from "./pages/Contact";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";

// Define the AppInitialState interface to properly type the initialState prop
interface AppInitialState {
  isServerRendered?: boolean;
  isBrowser?: boolean;
  isClient?: boolean;
  serverUrl?: string;
  renderTime?: string;
  renderError?: boolean;
  errorMessage?: string;
  forceClientRender?: boolean;
  [key: string]: any; // Allow for additional properties
}

// Create a new query client with deterministic settings for server/client parity
const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      // Disable retries to ensure deterministic behavior
      retry: false,
      // Disable refetches on window focus for SSR/SSG
      refetchOnWindowFocus: false,
      // Ensure stale time is consistent
      staleTime: 5 * 60 * 1000,
    },
  },
});

// Environment detection - safer check that works in all environments
const isBrowser = typeof window !== 'undefined';

// Browser-only component for handling redirects - only used in client-side rendering
const RedirectHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Only run in browser environment
    if (!isBrowser) return;
    
    // If this is a redirect from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && location.pathname === '/') {
      // Remove from session storage and redirect
      sessionStorage.removeItem('redirectPath');
      window.history.replaceState(null, '', redirectPath);
    }
  }, [location]);
  
  return null;
};

// Component to handle routes with animation
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/:category/:slug" element={<Post />} />
        <Route path="/academic-resources" element={<AcademicResources />} />
        <Route path="/academic-resources/citation-guidelines" element={<CitationGuidelines />} />
        <Route path="/academic-resources/research-methodology" element={<ResearchMethodology />} />
        <Route path="/academic-resources/academic-writing" element={<AcademicWriting />} />
        <Route path="/academic-resources/peer-review-process" element={<PeerReviewProcess />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

// Client-only components wrapper
const ClientOnlyComponents = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <>
      <Toaster />
      <Sonner />
      <ScrollToTop />
    </>
  );
};

// Server-safe router wrapper
const RouterWrapper = ({ children, initialState }: { children: React.ReactNode, initialState: AppInitialState }) => {
  // More explicit check for forcing client render
  const forceClientRender = initialState?.forceClientRender;
  
  if (!isBrowser) {
    // For SSR, don't use BrowserRouter
    return children;
  }
  
  return (
    <BrowserRouter>
      <RedirectHandler />
      {children}
    </BrowserRouter>
  );
};

// Main App component
const App = ({ initialState = {} as AppInitialState }) => {
  console.log("App rendering, environment:", isBrowser ? "browser" : "server", 
    initialState.forceClientRender ? "(forced client render)" : "");
  
  // Create a new query client instance for each render to avoid shared state issues
  const [queryClient] = useState(() => createQueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Only render browser-specific components in the browser */}
        {isBrowser && <ClientOnlyComponents />}
        
        <RouterWrapper initialState={initialState}>
          <AnimatedRoutes />
        </RouterWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
