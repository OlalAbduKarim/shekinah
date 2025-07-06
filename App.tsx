
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SermonsPage from './pages/SermonsPage';
import MediaPage from './pages/MediaPage';
import EventsPage from './pages/EventsPage';
import GivePage from './pages/GivePage';
import DevotionsPage from './pages/DevotionsPage';
import ContactPage from './pages/ContactPage';
import NewsletterPopup from './components/NewsletterPopup';
import Chatbox from './components/Chatbox';
import useScrollToTop from './hooks/useScrollToTop';

const AppContent: React.FC = () => {
    useScrollToTop();
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sermons" element={<SermonsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/give" element={<GivePage />} />
            <Route path="/devotions" element={<DevotionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-sg-light font-sans text-gray-800">
        <Header />
        <main className="pt-20"> {/* Padding to offset fixed header */}
          <AppContent />
        </main>
        <Footer />
        <NewsletterPopup />
        <Chatbox />
      </div>
    </HashRouter>
  );
};

export default App;
