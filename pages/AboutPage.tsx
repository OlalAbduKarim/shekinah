import React from 'react';
import { MOCK_LEADERSHIP_TEAM } from '../constants';
import { TeamMember } from '../types';

const PageHeader = () => (
    <div className="relative h-56 sm:h-64 bg-sg-purple flex items-center justify-center text-white text-center p-4">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="https://picsum.photos/id/111/1200/400" alt="Church interior" className="w-full h-full object-cover"/>
        <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">About Us</h1>
            <p className="text-base sm:text-lg lg:text-xl mt-2">Our Mission, Vision, and Leadership</p>
        </div>
    </div>
);

const MissionVision: React.FC = () => (
    <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sg-purple mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">To create an atmosphere where people can experience the tangible presence of God (Shekinah Glory), be transformed by His Word, and empowered to fulfill their divine purpose.</p>
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sg-purple mb-4">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">To be a global ministry that raises leaders, impacts communities, and reveals the love and power of Jesus Christ to all nations.</p>
                </div>
            </div>
        </div>
    </section>
);

const CoreBeliefs: React.FC = () => (
    <section className="py-16 sm:py-20 bg-sg-light">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-sg-purple mb-12">Our Core Beliefs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-sg-purple mb-2">The Scriptures</h3>
                    <p className="text-gray-600">We believe the Bible is the inspired and infallible Word of God.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-sg-purple mb-2">The Trinity</h3>
                    <p className="text-gray-600">We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-sg-purple mb-2">Salvation</h3>
                    <p className="text-gray-600">We believe salvation is a free gift received through repentance and faith in Jesus Christ.</p>
                </div>
            </div>
        </div>
    </section>
);

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-transform duration-300">
        <img className="w-full h-64 object-cover object-center" src={member.imageUrl} alt={member.name} />
        <div className="p-6">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-sg-purple">{member.name}</h3>
            <p className="text-sg-gold font-semibold mb-4">{member.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
        </div>
    </div>
);

const PastorsProfile: React.FC<{ pastor: TeamMember }> = ({ pastor }) => (
    <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center text-sg-purple mb-12">Meet Our Senior Pastor</h2>
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
                <div className="md:col-span-2">
                    <img src={pastor.imageUrl} alt={pastor.name} className="rounded-lg shadow-2xl w-full" />
                </div>
                <div className="md:col-span-3">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-sg-purple">{pastor.name}</h3>
                    <p className="text-xl text-sg-gold font-semibold mb-4">{pastor.role}</p>
                    <p className="text-gray-600 leading-relaxed text-lg">{pastor.bio}</p>
                </div>
            </div>
        </div>
    </section>
);


const LeadershipTeam: React.FC = () => (
    <section className="py-16 sm:py-20 bg-sg-light">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center text-sg-purple mb-12">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {MOCK_LEADERSHIP_TEAM.slice(1).map(member => (
                    <TeamMemberCard key={member.name} member={member} />
                ))}
            </div>
        </div>
    </section>
);

const AboutPage: React.FC = () => {
    const seniorPastor = MOCK_LEADERSHIP_TEAM[0];
    return (
        <div>
            <PageHeader />
            <MissionVision />
            <PastorsProfile pastor={seniorPastor}/>
            <CoreBeliefs />
            <LeadershipTeam />
        </div>
    );
};

export default AboutPage;