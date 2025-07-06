import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const PageHeader = () => (
    <div className="relative h-64 bg-sg-purple flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="https://picsum.photos/id/40/1200/400" alt="Phone and keyboard" className="w-full h-full object-cover"/>
        <div className="relative z-10">
            <h1 className="text-5xl font-serif font-bold">Get In Touch</h1>
            <p className="text-xl mt-2">We'd love to hear from you.</p>
        </div>
    </div>
);

const ContactForm: React.FC<{title: string; isPrayerRequest?: boolean}> = ({ title, isPrayerRequest = false }) => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would connect to a backend service like Firebase or an email API
        console.log('Form Submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    if (isSubmitted) {
        return <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
            <p className="font-bold">Thank You!</p>
            <p>{isPrayerRequest ? "Your prayer request has been received. Our team will be praying for you." : "Your message has been sent. We will get back to you shortly."}</p>
        </div>
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-serif font-bold text-sg-purple mb-6">{title}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sg-gold focus:border-sg-gold" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sg-gold focus:border-sg-gold" />
                    </div>
                </div>
                {!isPrayerRequest && (
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sg-gold focus:border-sg-gold" />
                </div>
                )}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">{isPrayerRequest ? "Your Prayer Request" : "Message"}</label>
                    <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sg-gold focus:border-sg-gold"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sg-purple hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sg-purple transition-colors duration-300">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

const ContactPage: React.FC = () => {
    return (
        <div className="bg-sg-light">
            <PageHeader />
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Info and Map */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-3xl font-serif font-bold text-sg-purple mb-6">Our Location</h3>
                                <div className="space-y-4 text-gray-700 text-lg">
                                    <p className="flex items-center"><span className="text-sg-gold mr-3">📍</span>{CONTACT_INFO.address}</p>
                                    <p className="flex items-center"><span className="text-sg-gold mr-3">📧</span><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-sg-purple">{CONTACT_INFO.email}</a></p>
                                    <p className="flex items-center"><span className="text-sg-gold mr-3">📞</span><a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-sg-purple">{CONTACT_INFO.phone}</a></p>
                                    <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
                                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19.11 4.9L17.7 3.49C14.89 1.13 10.28.93 7.03 3.32c-3.1 2.29-4.22 6.24-2.88 9.71l-1.92 6.95l7.13-1.89c3.41 1.48 7.54.49 10.03-2.48c2.81-3.37 2.49-8.49-.68-11.21zM12.11 18.05c-1.27 0-2.52-.36-3.6-1.03l-4.4 1.17l1.19-4.28c-.8-1.15-1.25-2.5-1.25-3.92c0-4.32 3.51-7.83 7.83-7.83c2.09 0 4.05.81 5.54 2.3c2.25 2.25 2.62 5.92.93 8.64c-1.21 1.95-3.4 3.12-5.74 3.12z"/></svg>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.18193822188!2d32.60251834168741!3d0.3861879003503816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db28362a3e09d%3A0x1d4da8ac22797e82!2sKomamboga%2C%20Kampala!5e0!3m2!1sen!2sug!4v1677322987111!5m2!1sen!2sug"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Church Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Forms */}
                        <div className="space-y-12">
                            <ContactForm title="Send Us a Message" />
                            <ContactForm title="Submit a Prayer Request" isPrayerRequest={true} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;