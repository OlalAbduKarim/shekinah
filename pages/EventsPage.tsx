import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { Event } from '../types';

const PageHeader = () => (
    <div className="relative h-56 sm:h-64 bg-sg-purple flex items-center justify-center text-white text-center p-4">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="https://picsum.photos/id/20/1200/400" alt="Community event" className="w-full h-full object-cover"/>
        <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">Upcoming Events</h1>
            <p className="text-base sm:text-lg lg:text-xl mt-2">Get involved in our church life.</p>
        </div>
    </div>
);

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transform hover:-translate-y-2 transition-transform duration-300">
        <img className="w-full md:w-1/3 h-56 md:h-auto object-cover" src={event.imageUrl} alt={event.title} />
        <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-sg-purple mb-2">{event.title}</h3>
                <div className="flex items-center text-sg-gold font-semibold mb-2">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span>{event.date} at {event.time}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>{event.location}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>
            <div className="mt-6">
                <span className="text-sg-purple font-bold cursor-default">Learn More &rarr;</span>
            </div>
        </div>
    </div>
);

const EventsPage: React.FC = () => {
    return (
        <div className="bg-sg-light">
            <PageHeader />
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-6">
                    <div className="space-y-12">
                        {MOCK_EVENTS.map((event, index) => (
                            <EventCard key={index} event={event} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsPage;