import React, { useState } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { Church, Menu, X, Sun, Moon } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

const NavLinks: React.FC<{ className?: string, onClick?: () => void }> = ({ className, onClick }) => {
  const { isHighContrast } = useAccessibility();
  const linkStyle = "text-white hover:text-brand-gold transition duration-300 px-3 py-2 rounded-md text-sm font-medium";
  
  const activeLinkStyle = { 
    color: isHighContrast ? '#FFFF00' : '#AF6C00', 
    textDecoration: 'underline' 
  };

  return (
    <div className={className}>
      <ReactRouterDom.NavLink to="/" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onClick}>Home</ReactRouterDom.NavLink>
      <ReactRouterDom.NavLink to="/about" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onClick}>About Us</ReactRouterDom.NavLink>
      <ReactRouterDom.NavLink to="/livestream" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onClick}>Livestream</ReactRouterDom.NavLink>
      <ReactRouterDom.NavLink to="/events" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onClick}>Events</ReactRouterDom.NavLink>
      <ReactRouterDom.NavLink to="/devotionals" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onClick}>Devotionals</ReactRouterDom.NavLink>
      <ReactRouterDom.NavLink to="/prayer" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onClick}>Prayer</ReactRouterDom.NavLink>
      <ReactRouterDom.NavLink to="/contact" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onClick}>Contact</ReactRouterDom.NavLink>
      <ReactRouterDom.NavLink to="/give" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-brand-blue bg-brand-gold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500" onClick={onClick}>
        Give Now
      </ReactRouterDom.NavLink>
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { increaseFontSize, decreaseFontSize, isHighContrast, toggleHighContrast } = useAccessibility();


  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <ReactRouterDom.NavLink to="/" className="flex items-center text-white">
              <Church className="h-8 w-8 text-brand-gold" />
              <span className="ml-3 text-xl font-bold font-serif">Shekinah Glory Worship Center</span>
            </ReactRouterDom.NavLink>
          </div>
          <div className="hidden md:block">
            <NavLinks className="ml-10 flex items-baseline space-x-4" />
          </div>
          <div className="flex items-center">
             <div className="hidden md:flex items-center space-x-2 mr-4">
                <button onClick={decreaseFontSize} className="p-2 text-white hover:text-brand-gold rounded-full transition-colors">-A</button>
                <button onClick={increaseFontSize} className="p-2 text-white hover:text-brand-gold rounded-full transition-colors">+A</button>
                <button onClick={toggleHighContrast} className="p-2 text-white hover:text-brand-gold rounded-full transition-colors">
                    {isHighContrast ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
            <div className="-mr-2 flex md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavLinks className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col" onClick={() => setIsOpen(false)} />
           <div className="flex items-center space-x-2 px-4 pb-3">
                <button onClick={decreaseFontSize} className="p-2 text-white hover:text-brand-gold rounded-full transition-colors">-A</button>
                <button onClick={increaseFontSize} className="p-2 text-white hover:text-brand-gold rounded-full transition-colors">+A</button>
                <button onClick={toggleHighContrast} className="p-2 text-white hover:text-brand-gold rounded-full transition-colors">
                    {isHighContrast ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;