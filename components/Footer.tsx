import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sg-purple text-white font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-serif font-bold text-sg-gold mb-4">Shekinah Glory</h3>
            <p className="text-gray-300">Experiencing His Presence, Extending His Love.</p>
             <div className="flex space-x-4 mt-6">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sg-gold transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sg-gold transition-colors duration-300">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM15.197 12 10 9.14v5.72L15.197 12Z" clipRule="evenodd" /></svg>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sg-gold transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 6.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2ZM12 7.044a4.956 4.956 0 1 0 0 9.912 4.956 4.956 0 0 0 0-9.912ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.846-8.19a1.202 1.202 0 1 1 2.404 0 1.202 1.202 0 0 1-2.404 0Z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-sg-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-sg-gold transition-colors duration-300">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-serif font-bold text-sg-gold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
                <li className="flex items-center text-center md:text-left"><span className="hidden md:inline-block mr-2">📍</span><span>{CONTACT_INFO.address}</span></li>
                <li className="flex items-center"><span className="hidden md:inline-block mr-2">📞</span><a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-sg-gold">{CONTACT_INFO.phone}</a></li>
                <li className="flex items-center"><span className="hidden md:inline-block mr-2">📧</span><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-sg-gold">{CONTACT_INFO.email}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-sg-gold mb-4">Service Times</h3>
            <ul className="space-y-2 text-gray-300">
                <li><strong>Sunday Worship:</strong> 10:00 AM</li>
                <li><strong>Wednesday Bible Study:</strong> 7:00 PM</li>
                <li><strong>Friday Prayer Meeting:</strong> 8:00 PM</li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shekinah Glory Worship Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
