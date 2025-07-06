import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');
        // Simulate form submission
        setTimeout(() => {
            setStatus(`Thank you, ${formData.name}. Your message has been sent!`);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
        }, 1500);
    };

    return (
        <section className="bg-brand-card p-8 rounded-lg shadow-lg" aria-labelledby="form-title">
            <h2 id="form-title" className="text-2xl font-bold font-serif text-brand-dark mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-text-muted">Full Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} autoComplete="name" className="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text-muted">Email Address</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} autoComplete="email" className="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-text-muted">Message</label>
                    <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-brand-blue bg-brand-gold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                        Submit
                    </button>
                </div>
                {status && <p className="text-center text-green-400 mt-4" role="status">{status}</p>}
            </form>
        </section>
    );
};


const ContactPage: React.FC = () => {
  useSeo({
      title: 'Contact Us',
      description: 'Get in touch with Shekinah Glory Worship Center. Find our address in Kampala, phone number, email, and a map to our location. We look forward to hearing from you.',
      path: '/contact'
  });

  return (
    <PageWrapper className="bg-brand-beige">
       <section className="text-center" aria-labelledby="contact-page-title">
            <h1 id="contact-page-title" className="text-4xl font-bold font-serif text-brand-dark">Get In Touch</h1>
            <p className="mt-4 text-xl text-brand-text-muted max-w-3xl mx-auto">We'd love to hear from you. Whether you have a question, a prayer request, or just want to say hello, please reach out.</p>
        </section>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <section className="space-y-8" aria-labelledby="contact-info-title">
                 <h2 id="contact-info-title" className="sr-only">Contact Information</h2>
                 <div className="bg-brand-card p-6 rounded-lg shadow-md">
                     <h3 className="text-xl font-semibold font-serif text-brand-dark flex items-center"><MapPin className="mr-3 h-6 w-6 text-brand-gold" />Our Location</h3>
                     <p className="mt-2 text-brand-text-muted">Komamboga-Kisamba Road, Kampala, Uganda</p>
                 </div>
                 <div className="bg-brand-card p-6 rounded-lg shadow-md">
                     <h3 className="text-xl font-semibold font-serif text-brand-dark flex items-center"><Phone className="mr-3 h-6 w-6 text-brand-gold" />Phone</h3>
                     <a href="tel:+256772450351" className="mt-2 text-brand-text-muted hover:text-brand-gold">+256 772 450 351</a>
                 </div>
                 <div className="bg-brand-card p-6 rounded-lg shadow-md">
                     <h3 className="text-xl font-semibold font-serif text-brand-dark flex items-center"><Mail className="mr-3 h-6 w-6 text-brand-gold" />Email</h3>
                     <a href="mailto:contact@shekinahglory.ug" className="mt-2 text-brand-text-muted hover:text-brand-gold">contact@shekinahglory.ug</a>
                 </div>
            </section>
        </div>

        <section className="mt-12" aria-labelledby="find-us-title">
            <h2 id="find-us-title" className="text-3xl font-bold font-serif text-brand-dark text-center mb-6">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    className="filter invert(1) hue-rotate(180deg)"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255348.2163945417!2d32.45842107382811!3d0.3134371701383503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb852571241d%3A0x452c3c6f35957388!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1675797375217!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Map showing the location of Shekinah Glory Worship Center in Kampala, Uganda"
                ></iframe>
            </div>
        </section>
    </PageWrapper>
  );
};

export default ContactPage;