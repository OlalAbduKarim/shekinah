
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { LEADERSHIP_TEAM } from '../constants';
import { LeadershipMember } from '../types';
import { useSeo } from '../hooks/useSeo';
import StructuredData from '../components/StructuredData';

const PastorMessage: React.FC<{ member: LeadershipMember }> = ({ member }) => (
    <section className="bg-brand-card rounded-xl shadow-xl overflow-hidden my-12" aria-labelledby="bishop-message-title">
        <div className="md:flex">
            <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-64" src={member.imageUrl} alt={member.name} />
            </div>
            <div className="p-8">
                <div id="bishop-message-title" className="uppercase tracking-wide text-sm text-brand-gold font-semibold font-sans">A Message from our Bishop</div>
                <h2 className="block mt-1 text-2xl leading-tight font-bold font-serif text-brand-dark">{member.name}</h2>
                <p className="mt-4 text-brand-text-muted">{member.bio}</p>
                <p className="mt-4 text-brand-dark font-serif italic">"We are so glad you're here. At Shekinah Glory, our doors and hearts are always open. We pray you find a home with us."</p>
            </div>
        </div>
    </section>
);

const LeadershipCard: React.FC<{ member: LeadershipMember }> = ({ member }) => (
    <article className="bg-brand-card rounded-lg shadow-lg text-center p-6 transform hover:scale-105 transition-transform duration-300">
        <img className="w-32 h-32 rounded-full mx-auto" src={member.imageUrl} alt={member.name} />
        <h3 className="mt-4 text-xl font-bold font-serif text-brand-dark">{member.name}</h3>
        <p className="text-brand-gold font-semibold">{member.role}</p>
        <p className="mt-2 text-sm text-brand-text-muted">{member.bio}</p>
    </article>
);

const AboutPage: React.FC = () => {
  useSeo({
    title: 'About Us',
    description: 'Learn about the history, beliefs, and leadership team of Shekinah Glory Worship Center. Meet Bishop Edward Baleke and our pastors.',
    path: '/about'
  });

  const leadBishop = LEADERSHIP_TEAM.find(m => m.role === 'Lead Bishop');

  const personSchema = LEADERSHIP_TEAM.map(member => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "description": member.bio,
    "image": member.imageUrl,
    "worksFor": {
      "@type": "Organization",
      "name": "Shekinah Glory Worship Center"
    }
  }));

  return (
    <PageWrapper className="bg-brand-beige">
      {personSchema.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
      <section className="text-center" aria-labelledby="about-page-title">
        <h1 id="about-page-title" className="text-4xl font-bold font-serif text-brand-dark">About Shekinah Glory Worship Center</h1>
        <p className="mt-4 text-xl text-brand-text-muted max-w-3xl mx-auto">Learn about our journey, our beliefs, and the people who lead our church.</p>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <article>
            <h2 className="text-3xl font-bold font-serif text-brand-dark mb-4">Our History</h2>
            <p className="text-brand-text-muted mb-4">
                Shekinah Glory Worship Center was founded with a shared vision to create a church that felt like family. Starting in a community hall, our congregation grew through a commitment to powerful worship, biblical teaching, and genuine community service in Kampala.
            </p>
            <p className="text-brand-text-muted">
                Today, we are a thriving, multicultural church that continues to be a beacon of hope and a center for spiritual growth in our city. We remain dedicated to our founding principles of loving God and loving people.
            </p>
        </article>
        <article>
            <h2 className="text-3xl font-bold font-serif text-brand-dark mb-4">Our Core Beliefs</h2>
            <ul className="list-disc list-inside space-y-2 text-brand-text-muted">
                <li>We believe the Bible is the inspired and infallible Word of God.</li>
                <li>We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.</li>
                <li>We believe in the deity of our Lord Jesus Christ, in His virgin birth, and in His sinless life.</li>
                <li>We believe in salvation by grace through faith in Jesus Christ.</li>
                <li>We believe in the present ministry of the Holy Spirit.</li>
            </ul>
        </article>
      </section>
      
      {leadBishop && <PastorMessage member={leadBishop} />}

      <section className="mt-16" aria-labelledby="leadership-title">
        <h2 id="leadership-title" className="text-3xl font-bold font-serif text-brand-dark text-center mb-12">Meet Our Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {LEADERSHIP_TEAM.map(member => (
                <LeadershipCard key={member.name} member={member} />
            ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default AboutPage;