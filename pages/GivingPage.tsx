
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Heart, CreditCard, Smartphone } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

const GivingPage: React.FC = () => {
  useSeo({
    title: 'Give Now',
    description: 'Support the mission of Shekinah Glory Worship Center through generous giving. Your contribution helps us spread the Gospel and serve our community.',
    path: '/give'
  });

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Tithe & Offering');
  const [paymentMethod, setPaymentMethod] = useState('Card');

  const handleAmountClick = (value: number) => {
    setAmount(value.toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your generous gift of $${amount} to ${category} via ${paymentMethod}!`);
    setAmount('');
  };

  return (
    <div className="bg-brand-card">
      <PageWrapper>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Donation Form */}
          <section className="bg-brand-beige p-8 rounded-lg shadow-lg" aria-labelledby="giving-form-title">
            <h2 id="giving-form-title" className="text-3xl font-bold font-serif text-brand-dark mb-6">Give Generously</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-brand-text-muted">Amount (USD)</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-brand-text-muted sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="focus:ring-brand-gold focus:border-brand-gold block w-full pl-7 pr-12 sm:text-sm bg-gray-800 border-gray-600 text-white rounded-md"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    aria-label="Donation amount in USD"
                  />
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2">
                    {[25, 50, 100, 250, 500, 1000].map(val => (
                         <button key={val} type="button" onClick={() => handleAmountClick(val)} className="bg-gray-700 border border-gray-600 text-brand-dark py-1 rounded-md hover:bg-gray-600 transition-colors" aria-label={`Set amount to ${val} dollars`}>${val}</button>
                    ))}
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-brand-text-muted">Giving Category</label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-800 border-gray-600 text-white focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm rounded-md"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Tithe & Offering</option>
                  <option>Building Fund</option>
                  <option>Missions & Outreach</option>
                  <option>Special Gift</option>
                </select>
              </div>

              <fieldset>
                 <legend className="block text-sm font-medium text-brand-text-muted">Payment Method</legend>
                 <div className="mt-2 grid grid-cols-2 gap-4">
                    <button type="button" onClick={() => setPaymentMethod('Card')} className={`flex items-center justify-center p-4 border rounded-md ${paymentMethod === 'Card' ? 'bg-brand-blue text-white ring-2 ring-brand-gold' : 'bg-gray-700 border-gray-600'}`}>
                        <CreditCard className="mr-2 h-5 w-5" /> Card
                    </button>
                    <button type="button" onClick={() => setPaymentMethod('Mobile')} className={`flex items-center justify-center p-4 border rounded-md ${paymentMethod === 'Mobile' ? 'bg-brand-blue text-white ring-2 ring-brand-gold' : 'bg-gray-700 border-gray-600'}`}>
                        <Smartphone className="mr-2 h-5 w-5" /> Mobile
                    </button>
                 </div>
              </fieldset>

              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-brand-blue bg-brand-gold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                Give Now
              </button>
            </form>
          </section>

          {/* Giving Philosophy */}
          <section className="text-left" aria-labelledby="why-we-give-title">
            <Heart className="h-12 w-12 text-brand-gold mb-4" />
            <h1 id="why-we-give-title" className="text-4xl font-bold font-serif text-brand-dark">Why We Give</h1>
            <p className="mt-4 text-lg text-brand-text-muted">
              We believe that generous giving is an act of worship and a response to the incredible generosity of God. Your contributions fuel the mission of our church, enabling us to spread the Gospel, serve our community, and create spaces for people to encounter God.
            </p>
            <p className="mt-4 text-brand-text-muted">
              Every gift, no matter the size, makes a significant impact. Thank you for your faithfulness and partnership in the ministry of Shekinah Glory Worship Center.
            </p>
          </section>
        </div>
      </PageWrapper>
    </div>
  );
};

export default GivingPage;