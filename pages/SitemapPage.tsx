import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { useSeo } from '../hooks/useSeo';
import { Home, Users, Video, Calendar, Heart, BookOpen, Send, Mail } from 'lucide-react';

interface SitemapLinkProps {
  to: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const SitemapLink: React.FC<SitemapLinkProps> = ({ to, icon: Icon, title, description }) => (
  <ReactRouterDom.Link to={to} className="flex items-start p-4 bg-brand-card rounded-lg shadow-md hover:bg-gray-700 hover:shadow-xl transition-all duration-300 group">
    <Icon className="h-8 w-8 text-brand-gold flex-shrink-0 mt-1" />
    <div className="ml-4">
      <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-gold">{title}</h3>
      <p className="text-sm text-brand-text-muted mt-1">{description}</p>
    </div>
  </ReactRouterDom.Link>
);


const SitemapPage: React.FC = () => {
  useSeo({
    title: 'Sitemap',
    description: 'Explore the full sitemap for the Shekinah Glory Worship Center website. Find links to all our pages including About Us, Sermons, Events, Giving, and more.',
    path: '/sitemap',
  });

  const links: SitemapLinkProps[] = [
    { to: '/', icon: Home, title: 'Home', description: 'Return to our main landing page.' },
    { to: '/about', icon: Users, title: 'About Us', description: 'Learn our history, beliefs, and meet our team.' },
    { to: '/livestream', icon: Video, title: 'Livestream & Sermons', description: 'Watch live services and browse past messages.' },
    { to: '/events', icon: Calendar, title: 'Events', description: 'See all upcoming events and community gatherings.' },
    { to: '/give', icon: Heart, title: 'Give', description: 'Partner with us by giving tithes and offerings.' },
    { to: '/devotionals', icon: BookOpen, title: 'Devotionals', description: 'Get daily spiritual encouragement.' },
    { to: '/prayer', icon: Send, title: 'Prayer Requests', description: 'Let us know how we can pray for you.' },
    { to: '/contact', icon: Mail, title: 'Contact Us', description: 'Find our location, email, and phone number.' },
  ];

  return (
    <PageWrapper className="bg-brand-beige">
      <section className="text-center" aria-labelledby="sitemap-title">
        <h1 id="sitemap-title" className="text-4xl font-bold font-serif text-brand-dark">Sitemap</h1>
        <p className="mt-4 text-xl text-brand-text-muted max-w-3xl mx-auto">
          Use this page to easily navigate to any section of our website.
        </p>
      </section>

      <section className="mt-12 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map(link => (
            <SitemapLink key={link.to} {...link} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default SitemapPage;