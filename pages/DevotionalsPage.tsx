
import React, { useState, useCallback, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Devotional } from '../types';
import { generateDevotional } from '../services/geminiService';
import { BookOpen, RefreshCw, AlertTriangle } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import StructuredData from '../components/StructuredData';

const DevotionalCard: React.FC<{ devotional: Devotional }> = ({ devotional }) => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": devotional.title,
      "articleBody": devotional.body,
      "author": {
        "@type": "Organization",
        "name": "Shekinah Glory Worship Center"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Shekinah Glory Worship Center",
        "logo": {
            "@type": "ImageObject",
            "url": "https://picsum.photos/seed/logo/512/512"
        }
      },
      "datePublished": new Date().toISOString()
    };

    return (
        <article className="bg-brand-card rounded-xl shadow-lg p-8 transform transition-all duration-500">
            <StructuredData data={articleSchema} />
            <h2 className="text-3xl font-bold font-serif text-brand-dark">{devotional.title}</h2>
            <p className="mt-2 text-lg italic text-brand-gold font-semibold">"{devotional.scripture}"</p>
            <div className="mt-6 prose prose-lg max-w-none text-brand-dark">
                {devotional.body.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-brand-text-muted">{paragraph}</p>
                ))}
            </div>
        </article>
    );
};


const SkeletonLoader: React.FC = () => (
    <div className="bg-brand-card rounded-xl shadow-lg p-8 animate-pulse" aria-live="polite" aria-busy="true">
        <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-700 rounded w-1/2 mb-6"></div>
        <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
    </div>
);

const ErrorDisplay: React.FC<{ message: string, onRetry: () => void }> = ({ message, onRetry }) => (
     <div className="bg-red-900 bg-opacity-30 border-l-4 border-red-500 p-6 rounded-r-lg shadow-md text-center" role="alert">
        <AlertTriangle className="mx-auto h-12 w-12 text-red-400" />
        <h3 className="mt-4 text-xl font-semibold text-red-300">An Error Occurred</h3>
        <p className="mt-2 text-red-400">{message}</p>
        <button
            onClick={onRetry}
            className="mt-6 inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
        </button>
    </div>
);


const DevotionalsPage: React.FC = () => {
    useSeo({
        title: 'Daily Devotionals',
        description: 'Find encouragement and strength with AI-generated daily devotionals from Shekinah Glory Worship Center. Get a new reflection on God\'s word each day.',
        path: '/devotionals'
    });

    const [devotional, setDevotional] = useState<Devotional | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchDevotional = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const newDevotional = await generateDevotional();
            setDevotional(newDevotional);
        } catch (err: any) {
            setError(err.message || 'An unknown error occurred.');
            setDevotional(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchDevotional();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageWrapper className="bg-brand-beige">
            <section className="text-center" aria-labelledby="devotional-page-title">
                <BookOpen className="mx-auto h-16 w-16 text-brand-gold" />
                <h1 id="devotional-page-title" className="mt-4 text-4xl font-bold font-serif text-brand-dark">Daily Devotionals</h1>
                <p className="mt-4 text-xl text-brand-text-muted max-w-3xl mx-auto">Find encouragement and strength in God's word. A new devotional is just a click away.</p>
            </section>

            <div className="mt-10 max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <button
                        onClick={fetchDevotional}
                        disabled={isLoading}
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-blue bg-brand-gold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                    >
                        <RefreshCw className={`mr-2 h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
                        {isLoading ? 'Generating...' : 'Generate New Devotional'}
                    </button>
                </div>
                
                {isLoading && <SkeletonLoader />}
                {error && <ErrorDisplay message={error} onRetry={fetchDevotional} />}
                {!isLoading && !error && devotional && <DevotionalCard devotional={devotional} />}
            </div>
        </PageWrapper>
    );
};

export default DevotionalsPage;