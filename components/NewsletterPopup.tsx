import React, { useState, useEffect } from 'react';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Show popup only if it hasn't been closed or submitted this session
      if (!sessionStorage.getItem('newsletterPopupDismissed')) {
          setIsVisible(true);
      }
    }, 5000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('newsletterPopupDismissed', 'true');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Here you would integrate with a newsletter service (e.g., Mailchimp)
      console.log('Newsletter signup for:', email);
      setIsSubmitted(true);
      setTimeout(() => {
          handleClose();
      }, 3000); // Close after 3 seconds
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 font-sans">
      <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 max-w-md w-full relative transform transition-all scale-100 opacity-100 animate-fade-in">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        {isSubmitted ? (
            <div className="text-center py-4">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-sg-purple mb-2">Thank You!</h3>
                <p className="text-gray-600 text-sm sm:text-base">You've been successfully subscribed to our newsletter.</p>
            </div>
        ) : (
            <>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-sg-purple mb-2">Stay Connected</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">Join our mailing list to receive weekly encouragement, event updates, and inspirational content right in your inbox.</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sg-gold focus:border-sg-gold outline-none text-base"
                    />
                    <button type="submit" className="w-full mt-4 bg-sg-purple text-white font-bold py-3 px-6 rounded-md hover:bg-purple-800 transition-colors duration-300">
                        Subscribe
                    </button>
                </form>
                <p className="text-xs text-gray-400 mt-4 text-center">We respect your privacy. Unsubscribe at any time.</p>
            </>
        )}
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default NewsletterPopup;
