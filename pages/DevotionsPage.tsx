
import React from 'react';
import { MOCK_DEVOTIONALS } from '../constants';
import { Devotional } from '../types';

const PageHeader = () => (
    <div className="relative h-64 bg-sg-purple flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="https://picsum.photos/id/14/1200/400" alt="Person reading a book" className="w-full h-full object-cover"/>
        <div className="relative z-10">
            <h1 className="text-5xl font-serif font-bold">Devotions & Blog</h1>
            <p className="text-xl mt-2">Weekly inspiration to strengthen your faith.</p>
        </div>
    </div>
);

const DevotionalCard: React.FC<{ devotional: Devotional }> = ({ devotional }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
        <img className="w-full h-56 object-cover" src={devotional.imageUrl} alt={devotional.title} />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-serif font-bold text-sg-purple mb-2">{devotional.title}</h3>
            <p className="text-sm text-gray-500 mb-4">By {devotional.author} &bull; {devotional.date}</p>
            <p className="text-gray-600 leading-relaxed flex-grow">{devotional.excerpt}</p>
            <div className="mt-6">
                <a href="#/" className="font-bold text-sg-purple hover:text-sg-gold transition-colors duration-300">Read More &rarr;</a>
            </div>
        </div>
    </div>
);

const DevotionsPage: React.FC = () => {
    return (
        <div className="bg-sg-light">
            <PageHeader />
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {MOCK_DEVOTIONALS.map((devotional, index) => (
                            <DevotionalCard key={index} devotional={devotional} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DevotionsPage;
