
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { ShieldCheck } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

const PrayerRequestPage: React.FC = () => {
    useSeo({
        title: 'Submit a Prayer Request',
        description: 'Share your prayer requests with the pastoral team at Shekinah Glory Worship Center. We are here to stand with you in faith. All requests are handled with confidentiality.',
        path: '/prayer'
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');
    const [isConfidential, setIsConfidential] = useState(true);
    const [requestCall, setRequestCall] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Submitting your prayer request...');
        // Simulate submission
        setTimeout(() => {
            setStatus('Your prayer request has been received. Our team is praying for you.');
            setName('');
            setEmail('');
            setRequest('');
            setIsConfidential(true);
            setRequestCall(false);
             setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
        }, 1500);
    };

    return (
        <div className="bg-brand-card">
            <PageWrapper>
                <div className="max-w-3xl mx-auto">
                    <section className="text-center" aria-labelledby="prayer-page-title">
                        <h1 id="prayer-page-title" className="text-4xl font-bold font-serif text-brand-dark">Submit a Prayer Request</h1>
                        <blockquote className="mt-4 text-xl text-brand-text-muted">
                            <p>"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."</p>
                            <cite className="block not-italic mt-2">- Philippians 4:6</cite>
                        </blockquote>
                        <p className="mt-4 text-brand-text-muted">Please share your requests with us. Our prayer team is honored to stand with you in faith.</p>
                    </section>

                    <section className="mt-12 bg-brand-beige p-8 rounded-lg shadow-xl" aria-labelledby="prayer-form-title">
                        <h2 id="prayer-form-title" className="sr-only">Prayer Request Form</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-brand-text-muted">Name (optional)</label>
                                <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} autoComplete="name" className="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-brand-text-muted">Email (optional, for follow-up)</label>
                                <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" className="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold" />
                            </div>
                             <div>
                                <label htmlFor="request" className="block text-sm font-medium text-brand-text-muted">Prayer Request</label>
                                <textarea name="request" id="request" rows={6} required value={request} onChange={e => setRequest(e.target.value)} className="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold"></textarea>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="confidential" name="confidential" type="checkbox" checked={isConfidential} onChange={e => setIsConfidential(e.target.checked)} className="focus:ring-brand-gold h-4 w-4 text-brand-blue border-gray-500 rounded bg-gray-700" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="confidential" className="font-medium text-brand-dark">This request is confidential (Pastoral staff only)</label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="requestCall" name="requestCall" type="checkbox" checked={requestCall} onChange={e => setRequestCall(e.target.checked)} className="focus:ring-brand-gold h-4 w-4 text-brand-blue border-gray-500 rounded bg-gray-700" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="requestCall" className="font-medium text-brand-dark">I would like someone to call and pray with me.</label>
                                </div>
                            </div>
                            <div className="pt-2">
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-brand-blue bg-brand-gold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                                    Submit Prayer Request
                                </button>
                            </div>
                            {status && <p className="text-center text-green-400 font-semibold mt-4" role="status">{status}</p>}
                        </form>
                         <div className="mt-6 flex items-center text-sm text-brand-text-muted">
                            <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                            <span>Your privacy is important to us. All requests are handled with care and confidentiality.</span>
                        </div>
                    </section>
                </div>
            </PageWrapper>
        </div>
    );
};

export default PrayerRequestPage;