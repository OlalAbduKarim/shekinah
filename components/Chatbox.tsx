import React from 'react';
import { CONTACT_INFO } from '../constants';

const Chatbox: React.FC = () => {
  const whatsappNumber = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 font-sans">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform duration-200 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19.11 4.9L17.7 3.49C14.89 1.13 10.28.93 7.03 3.32c-3.1 2.29-4.22 6.24-2.88 9.71l-1.92 6.95l7.13-1.89c3.41 1.48 7.54.49 10.03-2.48c2.81-3.37 2.49-8.49-.68-11.21zM12.11 18.05c-1.27 0-2.52-.36-3.6-1.03l-4.4 1.17l1.19-4.28c-.8-1.15-1.25-2.5-1.25-3.92c0-4.32 3.51-7.83 7.83-7.83c2.09 0 4.05.81 5.54 2.3c2.25 2.25 2.62 5.92.93 8.64c-1.21 1.95-3.4 3.12-5.74 3.12z"/></svg>
      </a>
    </div>
  );
};

export default Chatbox;
