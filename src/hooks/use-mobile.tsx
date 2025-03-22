
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Start with false by default to ensure matching server-side initial render
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Function to check if viewport is mobile width
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    checkIsMobile()
    
    // Setup listener for window resize
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Use event listener method with better compatibility
    const handleChange = () => checkIsMobile()
    mql.addEventListener("change", handleChange)
    
    // Cleanup listener on unmount
    return () => mql.removeEventListener("change", handleChange)
  }, [])

  return isMobile
}
