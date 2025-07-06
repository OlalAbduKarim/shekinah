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
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1DAE5A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.474.854-1.04 3.833 3.91-1.025.866.494z"/></svg>
      </a>
    </div>
  );
};

export default Chatbox;