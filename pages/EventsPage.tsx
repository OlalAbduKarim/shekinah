
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { MOCK_EVENTS } from '../constants';
import { Event } from '../types';
import { Calendar, Clock, MapPin, X } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import StructuredData from '../components/StructuredData';

const EventCard: React.FC<{ event: Event, onSelect: (event: Event) => void }> = ({ event, onSelect }) => {
  const eventDate = new Date(event.dateTime);
  const date = eventDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const time = eventDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  
  return (
    <article 
      className="bg-brand-card rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
      onClick={() => onSelect(event)}
      aria-label={`View details for ${event.title}`}
    >
      <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold font-serif text-brand-dark">{event.title}</h3>
        <p className="mt-2 text-md text-brand-gold font-semibold flex items-center"><Calendar className="mr-2 h-5 w-5" />{date}</p>
        <p className="mt-1 text-sm text-brand-text-muted flex items-center"><Clock className="mr-2 h-5 w-5" />{time}</p>
        <div className="mt-4 w-full bg-brand-blue text-white py-2 rounded-md hover:bg-opacity-90 transition-colors text-center">
          View Details
        </div>
      </div>
    </article>
  );
};


const EventModal: React.FC<{ event: Event, onClose: () => void }> = ({ event, onClose }) => {
    const eventDate = new Date(event.dateTime);
    const date = eventDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const time = eventDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

    const eventSchema = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": event.title,
        "startDate": event.dateTime,
        "description": event.description,
        "location": {
            "@type": "Place",
            "name": event.location,
            "address": "Komamboga-Kisamba Road, Kampala, Uganda"
        },
        "image": event.imageUrl,
        "organizer": {
            "@type": "Organization",
            "name": "Shekinah Glory Worship Center"
        }
    };
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="event-modal-title">
        <StructuredData data={eventSchema} />
        <div className="bg-brand-card rounded-lg shadow-xl max-w-2xl w-full relative transform transition-all scale-100">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white" aria-label="Close modal">
            <X size={24} />
          </button>
          <img className="w-full h-64 object-cover rounded-t-lg" src={event.imageUrl} alt={event.title} />
          <div className="p-8">
            <h2 id="event-modal-title" className="text-3xl font-bold font-serif text-brand-dark">{event.title}</h2>
            <div className="mt-4 space-y-2 text-brand-text-muted">
                <p className="flex items-center"><Calendar className="mr-3 h-5 w-5 text-brand-gold" /><strong>Date:</strong><span className="ml-2">{date}</span></p>
                <p className="flex items-center"><Clock className="mr-3 h-5 w-5 text-brand-gold" /><strong>Time:</strong><span className="ml-2">{time}</span></p>
                <p className="flex items-center"><MapPin className="mr-3 h-5 w-5 text-brand-gold" /><strong>Location:</strong><span className="ml-2">{event.location}</span></p>
            </div>
            <p className="mt-6 text-brand-text-muted">{event.description}</p>
            <div className="mt-8 flex justify-end gap-4">
                <button onClick={onClose} className="px-6 py-2 rounded-md text-brand-dark border border-gray-500 hover:bg-gray-600">Close</button>
                <button className="px-6 py-2 rounded-md bg-brand-gold text-brand-blue font-semibold hover:bg-amber-400">RSVP / Register</button>
            </div>
          </div>
        </div>
      </div>
    );
};

const EventsPage: React.FC = () => {
    useSeo({
        title: 'Upcoming Events',
        description: 'Find your place to connect and grow. See all upcoming events at Shekinah Glory Worship Center, from worship nights to community outreach.',
        path: '/events'
    });

    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    return (
        <PageWrapper className="bg-brand-beige">
            <section className="text-center" aria-labelledby="events-page-title">
                <h1 id="events-page-title" className="text-4xl font-bold font-serif text-brand-dark">Upcoming Events</h1>
                <p className="mt-4 text-xl text-brand-text-muted max-w-3xl mx-auto">There's always something happening at Shekinah Glory. Find your place to connect and grow.</p>
            </section>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_EVENTS.map(event => (
                    <EventCard key={event.id} event={event} onSelect={setSelectedEvent} />
                ))}
            </div>

            {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
        </PageWrapper>
    );
};

export default EventsPage;