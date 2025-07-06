
import React, { useState } from 'react';

const Chatbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Chat Window */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="w-80 h-96 bg-white rounded-lg shadow-2xl flex flex-col">
          <div className="bg-sg-purple p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-bold">Chat with Us</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm">
            <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                <p>Welcome to Shekinah Glory! How can we help you today?</p>
            </div>
          </div>
          <div className="p-2 border-t">
            <input type="text" placeholder="Type your message..." className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sg-gold"/>
          </div>
        </div>
      </div>
      
      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`mt-4 ml-auto flex items-center justify-center w-16 h-16 bg-sg-purple text-white rounded-full shadow-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sg-purple transition-transform duration-200 ${isOpen ? 'transform scale-0' : 'transform scale-100'}`}
        aria-label="Open Chat"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
      </button>
    </div>
  );
};

export default Chatbox;
