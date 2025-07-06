
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { MOCK_SERMONS } from '../constants';
import { Sermon } from '../types';
import { PlayCircle, Search } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import StructuredData from '../components/StructuredData';

const SermonCard: React.FC<{ sermon: Sermon; onPlay: (url: string) => void }> = ({ sermon, onPlay }) => (
  <article className="bg-brand-card rounded-lg shadow-lg overflow-hidden group cursor-pointer" onClick={() => onPlay(sermon.videoUrl)} aria-label={`Play sermon: ${sermon.title}`}>
    <div className="relative">
      <img src={sermon.thumbnailUrl} alt={sermon.title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <PlayCircle className="text-white h-16 w-16" />
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-brand-dark group-hover:text-brand-gold">{sermon.title}</h3>
      <p className="text-sm text-brand-text-muted">{sermon.speaker}</p>
      <p className="text-xs text-gray-400 mt-1">{new Date(sermon.date).toLocaleDateString()}</p>
    </div>
  </article>
);

const LivestreamPage: React.FC = () => {
  useSeo({
      title: 'Livestream & Sermons',
      description: 'Watch our services live and browse our archive of past sermons from Shekinah Glory Worship Center. Find messages of hope and encouragement.',
      path: '/livestream'
  });

  const [currentVideoUrl, setCurrentVideoUrl] = useState("https://www.youtube.com/embed/jfKfPfyJRdk"); // Placeholder for a live service
  const [searchTerm, setSearchTerm] = useState('');

  const handlePlaySermon = (url: string) => {
    setCurrentVideoUrl(url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredSermons = MOCK_SERMONS.filter(sermon =>
    sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sermonSchema = filteredSermons.map(sermon => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": sermon.title,
    "description": `A sermon titled "${sermon.title}" by ${sermon.speaker}, delivered at Shekinah Glory Worship Center.`,
    "uploadDate": sermon.date,
    "thumbnailUrl": sermon.thumbnailUrl,
    "embedUrl": sermon.videoUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Shekinah Glory Worship Center",
      "logo": {
        "@type": "ImageObject",
        "url": "https://picsum.photos/seed/logo/512/512"
      }
    }
  }));

  return (
    <PageWrapper className="bg-brand-card">
      {sermonSchema.map((schema, index) => <StructuredData key={index} data={schema} />)}
      <section className="text-center mb-8" aria-labelledby="livestream-title">
        <h1 id="livestream-title" className="text-4xl font-bold font-serif text-brand-dark">Watch With Us</h1>
        <p className="mt-4 text-xl text-brand-text-muted max-w-3xl mx-auto">Join our services live or catch up on past messages.</p>
      </section>

      <section className="mb-12 aspect-video" aria-label="Livestream Player">
        <iframe
          className="w-full h-full rounded-lg shadow-2xl"
          src={currentVideoUrl}
          title="Shekinah Glory Worship Center Livestream"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      
      <section className="border-t border-gray-700 pt-12" aria-labelledby="sermon-archive-title">
        <h2 id="sermon-archive-title" className="text-3xl font-bold font-serif text-brand-dark mb-6">Sermon Archive</h2>
        <div className="relative mb-8 max-w-lg mx-auto">
          <label htmlFor="sermon-search" className="sr-only">Search Sermons</label>
          <input
            type="search"
            id="sermon-search"
            placeholder="Search sermons by title or speaker..."
            className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-full focus:ring-brand-gold focus:border-brand-gold placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSermons.map(sermon => (
            <SermonCard key={sermon.id} sermon={sermon} onPlay={handlePlaySermon} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default LivestreamPage;