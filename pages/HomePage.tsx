import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { Clock, Video, HeartHandshake, Calendar, ArrowRight, BookOpen, Flame } from 'lucide-react';
import { MOCK_EVENTS } from '../constants';
import PageWrapper from '../components/PageWrapper';
import { useSeo } from '../hooks/useSeo';
import StructuredData from '../components/StructuredData';

const HeroSection: React.FC = () => (
  <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center px-4" style={{backgroundImage: 'url(https://picsum.photos/seed/worship/1920/1080)', backgroundSize: 'cover', backgroundPosition: 'center'}} aria-labelledby="hero-title">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10">
      <h1 id="hero-title" className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">Welcome to Shekinah Glory Worship Center</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-light drop-shadow-md">A place of hope, healing, and discovering your purpose in Christ.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <ReactRouterDom.Link to="/livestream" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue bg-brand-gold hover:bg-amber-400 transition-transform hover:scale-105">
          <Video className="mr-2 h-5 w-5" /> Join Us Live
        </ReactRouterDom.Link>
        <ReactRouterDom.Link to="/give" className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-brand-blue transition-transform hover:scale-105">
          <HeartHandshake className="mr-2 h-5 w-5" /> Give Now
        </ReactRouterDom.Link>
      </div>
    </div>
  </section>
);

const ServicesSection: React.FC = () => (
  <section className="bg-brand-card" aria-labelledby="services-title">
    <PageWrapper>
      <div className="text-center">
        <h2 id="services-title" className="text-3xl font-bold font-serif text-brand-dark">Join Us for Worship</h2>
        <p className="mt-4 text-lg text-brand-text-muted">Experience God's presence with us every week.</p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-brand-beige rounded-lg shadow-md">
          <Clock className="mx-auto h-12 w-12 text-brand-gold" />
          <h3 className="mt-4 text-xl font-semibold text-brand-dark">Sunday Services</h3>
          <p className="mt-2 text-brand-text-muted">1st Service: 8:00 AM - 10:20 AM</p>
          <p className="mt-1 text-brand-text-muted">2nd Service: 10:30 AM - 12:30 PM</p>
        </div>
        <div className="p-6 bg-brand-beige rounded-lg shadow-md">
          <BookOpen className="mx-auto h-12 w-12 text-brand-gold" />
          <h3 className="mt-4 text-xl font-semibold text-brand-dark">Midweek Bible Study</h3>
          <p className="mt-2 text-brand-text-muted">Wednesdays, 6:00 PM - 8:00 PM</p>
        </div>
        <div className="p-6 bg-brand-beige rounded-lg shadow-md">
          <Flame className="mx-auto h-12 w-12 text-brand-gold" />
          <h3 className="mt-4 text-xl font-semibold text-brand-dark">Altar & Overnights</h3>
          <p className="mt-2 text-brand-text-muted">Fridays</p>
        </div>
      </div>
    </PageWrapper>
  </section>
);

const EventsSection: React.FC = () => (
  <section className="bg-brand-beige" aria-labelledby="events-title">
    <PageWrapper>
      <div className="text-center mb-12">
        <h2 id="events-title" className="text-3xl font-bold font-serif text-brand-dark">Upcoming Events</h2>
        <p className="mt-4 text-lg text-brand-text-muted">Get involved in our community life.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_EVENTS.slice(0, 3).map(event => {
          const eventDate = new Date(event.dateTime);
          return (
            <article key={event.id} className="bg-brand-card rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-dark">{event.title}</h3>
                <p className="mt-2 text-sm text-brand-text-muted flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {eventDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="mt-3 text-brand-text-muted">{event.description.substring(0, 100)}...</p>
                <ReactRouterDom.Link to="/events" className="inline-flex items-center mt-4 text-brand-gold font-semibold hover:text-amber-500">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </ReactRouterDom.Link>
              </div>
            </article>
          )
        })}
      </div>
    </PageWrapper>
  </section>
);

const HomePage: React.FC = () => {
  useSeo({
    title: 'Home',
    description: 'Welcome to Shekinah Glory Worship Center in Kampala, Uganda. Join us for worship, community events, and a journey of faith.',
    path: '/',
    imageUrl: 'https://picsum.photos/seed/worship/1200/630'
  });

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://[YOUR-WEBSITE-URL-HERE].com/",
    "name": "Shekinah Glory Worship Center",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://[YOUR-WEBSITE-URL-HERE].com/#/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };


  return (
    <>
      <StructuredData data={websiteSchema} />
      <HeroSection />
      <ServicesSection />
      <EventsSection />
    </>
  );
};

export default HomePage;