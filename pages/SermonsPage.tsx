
import React from 'react';
import { MOCK_SERMONS } from '../constants';
import { Sermon } from '../types';

const PageHeader = () => (
    <div className="relative h-64 bg-sg-purple flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="https://picsum.photos/id/103/1200/400" alt="Pulpit" className="w-full h-full object-cover"/>
        <div className="relative z-10">
            <h1 className="text-5xl font-serif font-bold">Livestream & Sermons</h1>
            <p className="text-xl mt-2">Catch up on the latest messages.</p>
        </div>
    </div>
);

const LivestreamPlayer: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-sg-purple mb-8">Watch Us Live</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Our Sunday services are streamed live at 10:00 AM. Join our online family from anywhere in the world!</p>
            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                 <iframe 
                    src="https://www.youtube.com/embed/live_stream?channel=UC4R8DWoMoI7CAwX8_LjQHig" 
                    title="Live Stream" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
        <style>{`.aspect-w-16 { position: relative; padding-bottom: 56.25%; } .aspect-h-9 { height: 0; } .aspect-w-16 > iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }`}</style>
    </section>
);

const SermonCard: React.FC<{ sermon: Sermon }> = ({ sermon }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
            <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${sermon.videoId}`} title={sermon.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-sg-purple mb-2">{sermon.title}</h3>
            <p className="text-gray-500">{sermon.speaker}</p>
            <p className="text-sm text-gray-400 mt-1">{sermon.date}</p>
        </div>
    </div>
);

const PastSermons: React.FC = () => (
    <section className="py-20 bg-sg-light">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center text-sg-purple mb-12">Sermon Archive</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_SERMONS.map((sermon, index) => (
                    <SermonCard key={index} sermon={sermon} />
                ))}
            </div>
        </div>
    </section>
);


const SermonsPage: React.FC = () => {
    return (
        <div>
            <PageHeader />
            <LivestreamPlayer />
            <PastSermons />
        </div>
    );
};

export default SermonsPage;
