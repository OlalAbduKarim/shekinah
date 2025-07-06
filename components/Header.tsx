
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: '#FFD700',
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-sg-purple shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-white text-2xl font-serif font-bold tracking-wider">
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
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

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-sg-purple bg-opacity-95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {NAV_LINKS.map(link => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="block text-white rounded-md px-3 py-2 text-base font-medium hover:bg-sg-gold hover:text-sg-purple"
              style={({ isActive }) => isActive ? { ...activeLinkStyle, background: 'rgba(255, 215, 0, 0.1)' } : {}}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/give" onClick={() => setIsOpen(false)} className="block w-1/2 mx-auto mt-4 bg-sg-gold text-sg-purple font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-all duration-300">
            Give
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
