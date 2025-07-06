
import React from 'react';

const PageHeader = () => (
    <div className="relative h-64 bg-sg-purple flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="https://picsum.photos/id/33/1200/400" alt="Giving hands" className="w-full h-full object-cover"/>
        <div className="relative z-10">
            <h1 className="text-5xl font-serif font-bold">Give Generously</h1>
            <p className="text-xl mt-2">Partner with us in advancing God's Kingdom.</p>
        </div>
    </div>
);

const DonationOption: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex justify-center items-center mb-4 text-sg-gold">{icon}</div>
        <h3 className="text-2xl font-serif font-bold text-sg-purple mb-4">{title}</h3>
        <div className="text-gray-600 space-y-2">{children}</div>
    </div>
);

const GivePage: React.FC = () => {
    return (
        <div className="bg-sg-light">
            <PageHeader />
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif font-bold text-sg-purple mb-4">Your Giving Makes a Difference</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Every gift you give helps us fund our local and global missions, support our community outreach programs, and maintain our facilities to continue being a beacon of hope. Thank you for your faithful partnership.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <DonationOption 
                            title="Mobile Money" 
                            icon={<svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>}
                        >
                            <p>Send your gift via Mobile Money to:</p>
                            <p className="font-bold text-lg">+123 456 789 000</p>
                            <p>Name: Shekinah Glory WC</p>
                        </DonationOption>
                        
                        <DonationOption 
                            title="PayPal"
                            icon={<svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M8.332 11.499a2.463 2.463 0 012.398-2.09c1.947-.076 3.167 1.238 3.239 1.31l.01.012c.11.135.688.814.688 1.966 0 1.25-.863 2.21-2.01 2.21h-2.148c-.642 0-1.12.37-1.169.91l-.004.032c-.08 1.238-.34 2.378-.34 2.378h1.839c.64 0 1.117-.37 1.165-.91l.004-.032c.075-1.132.55-1.63 1.144-1.63h.16c1.867 0 3.257-1.42 3.329-1.5l.01-.01c.11-.137.954-1.16 1.04-2.61-.04-.04 0-.083.04-.124.03-.314.04-.63.04-.943C20 6.417 17.632 4 14.632 4h-4.85c-.64 0-1.117.37-1.166.91l-.003.032-.821 5.557zm.975-4.59c0-.03.003-.06.01-.089l.004-.032c.05-.54.527-.91 1.165-.91h4.85c2.14 0 3.633 1.54 3.633 3.345 0 .285-.01.57-.04.85-.094 1.238-.763 2.258-1.04 2.61-.072.088-1.462 1.5-3.329 1.5h-.16c-1.33 0-2.31 1.25-2.385 1.328l-.01.012c-.11.137-.95 1.16-1.033 2.61H7.135c.34-2.14.71-4.28.81-5.518l.005-.032c.05-.54.528-.91 1.166-.91h2.148c.55 0 .99-.44.99-.99s-.44-.99-.99-.99h-1.05c-.53 0-1.218-.075-1.92-.075z"/></svg>}
                        >
                             <p>Click the button below to give securely via PayPal.</p>
                             <a href="https://paypal.me/yourchurch" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-sg-purple text-white font-bold py-2 px-6 rounded-full hover:bg-purple-800 transition-all duration-300">
                                Give with PayPal
                            </a>
                        </DonationOption>
                        
                        <DonationOption 
                            title="Bank Transfer"
                            icon={<svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2a8.001 8.001 0 0115.357-2m0 0H15M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M4 11h16"></path></svg>}
                        >
                            <p><strong>Bank Name:</strong> Kingdom Trust Bank</p>
                            <p><strong>Account Name:</strong> Shekinah Glory WC</p>
                            <p><strong>Account Number:</strong> 1234567890</p>
                            <p><strong>Swift Code:</strong> KTBKUS33</p>
                        </DonationOption>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GivePage;
