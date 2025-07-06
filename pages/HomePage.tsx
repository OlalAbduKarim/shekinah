
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_SERMONS, MOCK_EVENTS } from '../constants';

const Hero: React.FC = () => (
    <div className="relative h-[85vh] min-h-[500px] text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="https://picsum.photos/id/1018/1920/1080" alt="Worship concert" className="w-full h-full object-cover"/>
        <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 tracking-wide leading-tight animate-fade-in-down">
                Experience His Presence
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
                Welcome to a place where faith is ignited, lives are transformed, and glory dwells.
            </p>
            <div className="space-x-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <Link to="/about" className="bg-sg-gold text-sg-purple font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 text-lg">
                    New Here?
                </Link>
                <Link to="/sermons" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg">
                    Watch Live
                </Link>
            </div>
        </div>
        <style>{`
            @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
            .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        `}</style>
    </div>
);

const ServiceTimes: React.FC = () => (
    <div className="bg-sg-purple text-white py-16">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-sg-gold mb-8">Join Us for Worship</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="p-6">
                    <h3 className="text-2xl font-bold font-serif">Sunday Worship</h3>
                    <p className="text-xl text-gray-300">10:00 AM</p>
                </div>
                <div className="p-6 border-t-2 border-b-2 md:border-t-0 md:border-b-0 md:border-l-2 md:border-r-2 border-sg-gold">
                    <h3 className="text-2xl font-bold font-serif">Wednesday Bible Study</h3>
                    <p className="text-xl text-gray-300">7:00 PM</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold font-serif">Friday Prayer</h3>
                    <p className="text-xl text-gray-300">8:00 PM</p>
                </div>
            </div>
        </div>
    </div>
);

const WelcomeMessage: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-serif font-bold text-sg-purple mb-4">A Warm Welcome Awaits You</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We are so glad you're here. At Shekinah Glory Worship Center, we are a family dedicated to experiencing the tangible presence of God and sharing His unconditional love with our community and the world. Whether you are seeking truth, a new church home, or a place to grow in your faith, we invite you to join us on this incredible journey.
                </p>
                <Link to="/about" className="text-sg-purple font-bold hover:text-sg-gold transition-colors duration-300">
                    Learn More About Us &rarr;
                </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/id/1011/600/400" alt="Pastor smiling" className="w-full h-full object-cover" />
            </div>
        </div>
    </section>
);

const LatestSermons: React.FC = () => (
    <section className="py-20 bg-sg-light">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold text-sg-purple mb-12">Latest Messages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {MOCK_SERMONS.slice(0, 2).map((sermon) => (
                    <div key={sermon.title} className="bg-white rounded-lg shadow-lg overflow-hidden text-left transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
                           <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${sermon.videoId}`} title={sermon.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-sg-purple mb-2">{sermon.title}</h3>
                            <p className="text-gray-500">{sermon.speaker} &bull; {sermon.date}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/sermons" className="mt-12 inline-block bg-sg-purple text-white font-bold py-3 px-8 rounded-full hover:bg-purple-800 transition-all duration-300">
                View All Sermons
            </Link>
        </div>
    </section>
);

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <ServiceTimes />
            <WelcomeMessage />
            <LatestSermons />
        </div>
    );
};

export default HomePage;
