import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LivestreamPage from './pages/LivestreamPage';
import EventsPage from './pages/EventsPage';
import GivingPage from './pages/GivingPage';
import DevotionalsPage from './pages/DevotionalsPage';
import ContactPage from './pages/ContactPage';
import PrayerRequestPage from './pages/PrayerRequestPage';
import SitemapPage from './pages/SitemapPage';
import { AccessibilityProvider } from './context/AccessibilityContext';

const PageContent = () => {
  const location = ReactRouterDom.useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className="flex-grow">
      <ReactRouterDom.Routes>
        <ReactRouterDom.Route path="/" element={<HomePage />} />
        <ReactRouterDom.Route path="/about" element={<AboutPage />} />
        <ReactRouterDom.Route path="/livestream" element={<LivestreamPage />} />
        <ReactRouterDom.Route path="/events" element={<EventsPage />} />
        <ReactRouterDom.Route path="/give" element={<GivingPage />} />
        <ReactRouterDom.Route path="/devotionals" element={<DevotionalsPage />} />
        <ReactRouterDom.Route path="/contact" element={<ContactPage />} />
        <ReactRouterDom.Route path="/prayer" element={<PrayerRequestPage />} />
        <ReactRouterDom.Route path="/sitemap" element={<SitemapPage />} />
      </ReactRouterDom.Routes>
    </main>
  );
};


const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <ReactRouterDom.HashRouter>
        <div className="flex flex-col min-h-screen bg-brand-beige text-brand-dark font-sans">
          <Header />
          <PageContent />
          <Footer />
        </div>
      </ReactRouterDom.HashRouter>
    </AccessibilityProvider>
  );
};

export default App;