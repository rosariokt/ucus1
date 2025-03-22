
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export function render(url) {
  // Set global environment for server rendering
  global.isBrowser = false;
  
  // Create preloaded state with clear environment markers
  const preloadedState = {
    isServerRendered: true,
    isBrowser: false,
    isClient: false, // Explicit flag for server-side
    serverUrl: url,
    renderTime: new Date().toISOString()
  };
  
  console.log(`Server rendering route: ${url}`);
  
  // Improved detection of hydration-error prone pages
  const isHydrationErrorPronePage = 
    url.includes('/categories') || 
    url.includes('/post') ||
    url.match(/\/[^\/]+\/[^\/]+$/) || // Match any pattern like /category/slug
    url.match(/\/ach\/full-\d+/);      // Match ach/full-NUMBER pattern specifically
  
  // Set forceClientRender for routes we know have hydration issues
  if (isHydrationErrorPronePage) {
    preloadedState.forceClientRender = true;
    console.log("Detected hydration-prone route, marking for client rendering:", url);
  }
  
  try {
    // Use StaticRouter for server rendering
    const html = renderToString(
      <StaticRouter location={url}>
        <App initialState={preloadedState} />
      </StaticRouter>
    );
    
    return { html, preloadedState };
  } catch (error) {
    console.error("Error during server rendering:", error);
    // Return minimal content if rendering fails, to be replaced by client-side rendering
    return { 
      html: `<div id="app-error">Loading...</div>`, 
      preloadedState: {
        ...preloadedState,
        renderError: true,
        errorMessage: error.message,
        forceClientRender: true
      }
    };
  }
}
