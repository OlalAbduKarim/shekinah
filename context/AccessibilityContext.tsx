
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type AccessibilityContextType = {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState(16); // base font size in px
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', isHighContrast);
  }, [isHighContrast]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));
  const toggleHighContrast = () => setIsHighContrast(prev => !prev);

  return (
    <AccessibilityContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize, isHighContrast, toggleHighContrast }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
