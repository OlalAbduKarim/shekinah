import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import StructuredData from './StructuredData';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  const churchSchema = {
    "@context": "https://schema.org",
    "@type": "Church",
    "name": "Shekinah Glory Worship Center",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Komamboga-Kisamba Road",
        "addressLocality": "Kampala",
        "addressCountry": "UG"
    },
    "telephone": "+256772450351",
    "email": "contact@shekinahglory.ug",
    "url": "https://shekinahglory.ug", // A placeholder URL
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [ "Sunday" ],
            "opens": "08:00",
            "closes": "12:30"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [ "Wednesday" ],
            "opens": "18:00",
            "closes": "20:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [ "Friday" ],
            "opens": "20:00"
        }
    ],
    "image": "https://picsum.photos/seed/logo/512/512" // Placeholder logo
  };

  return (
    <footer className="bg-brand-blue text-white font-sans">
      <StructuredData data={churchSchema} />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold font-serif">Shekinah Glory Worship Center</h3>
            <p className="text-gray-300 text-sm">A place of hope, healing, and restoration. Join us as we grow in faith and serve our community.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/shekinahglorykampala" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-gold" aria-label="Facebook"><Facebook size={20}/></a>
              <a href="https://twitter.com/shekinahgloryug" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-gold" aria-label="Twitter"><Twitter size={20}/></a>
              <a href="https://youtube.com/shekinahgloryworshipcenter" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-gold" aria-label="YouTube"><Youtube size={20}/></a>
              <a href="https://instagram.com/shekinahglorykampala" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-gold" aria-label="Instagram"><Instagram size={20}/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold font-serif">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><ReactRouterDom.NavLink to="/about" className="text-gray-300 hover:text-brand-gold">About Us</ReactRouterDom.NavLink></li>
              <li><ReactRouterDom.NavLink to="/livestream" className="text-gray-300 hover:text-brand-gold">Sermons</ReactRouterDom.NavLink></li>
              <li><ReactRouterDom.NavLink to="/events" className="text-gray-300 hover:text-brand-gold">Events</ReactRouterDom.NavLink></li>
              <li><ReactRouterDom.NavLink to="/give" className="text-gray-300 hover:text-brand-gold">Give</ReactRouterDom.NavLink></li>
              <li><ReactRouterDom.NavLink to="/sitemap" className="text-gray-300 hover:text-brand-gold">Sitemap</ReactRouterDom.NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold font-serif">Contact Us</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>Komamboga-Kisamba Road, Kampala, Uganda</p>
              <p>Email: <a href="mailto:contact@shekinahglory.ug" className="hover:text-brand-gold">contact@shekinahglory.ug</a></p>
              <p>Phone: <a href="tel:+256772450351" className="hover:text-brand-gold">+256 772 450 351</a></p>
            </address>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold font-serif">Join Our Newsletter</h3>
            <p className="text-gray-300 text-sm">Stay updated with our latest news and events.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <label htmlFor="newsletter-email" className="sr-only">Email for newsletter</label>
              <input 
                id="newsletter-email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="w-full px-3 py-2 text-white bg-gray-800 border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-gold placeholder-gray-400" 
                required
              />
              <button type="submit" className="px-4 py-2 bg-brand-gold text-brand-blue font-semibold rounded-r-md hover:bg-amber-400">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shekinah Glory Worship Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;