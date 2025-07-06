import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Toggle body scroll based on menu state
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to restore scroll on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const activeLinkStyle = {
    color: '#FFD700',
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-sg-purple shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-white text-xl sm:text-2xl font-serif font-bold tracking-wider">
            Shekinah Glory
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className="text-white hover:text-sg-gold transition-colors duration-300 font-sans"
                style={({ isActive }) => isActive ? activeLinkStyle : {}}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Link to="/give" className="bg-sg-gold text-sg-purple font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-all duration-300">
              Give
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none z-50 relative"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-20 bg-sg-purple bg-opacity-95 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="h-full flex flex-col justify-center items-center text-center px-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="block text-white text-2xl font-semibold py-3 transition-transform duration-300 hover:scale-110"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-8">
            <Link to="/give" onClick={() => setIsOpen(false)} className="inline-block w-auto mx-auto bg-sg-gold text-sg-purple font-bold py-3 px-10 rounded-full hover:bg-yellow-300 transition-all duration-300 text-lg">
              Give
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;