
import React, { useEffect, useState } from "react";

/**
 * Provider that detects keyboard navigation to enhance focus styles
 * Complies with WCAG 2.1 SC 2.4.7 (Focus Visible)
 */
const KeyboardFocusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setIsKeyboardUser(true);
        document.body.classList.add("keyboard-user");
      }
    };
    
    const handleMouseDown = () => {
      setIsKeyboardUser(false);
      document.body.classList.remove("keyboard-user");
    };
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  
  return (
    <>
      {children}
    </>
  );
};

export default KeyboardFocusProvider;
