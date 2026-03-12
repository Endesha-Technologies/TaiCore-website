'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
          Get In Touch
        </h2>
        <p className="text-center text-lg mb-12">
          Ready to start your project? Contact us today!
        </p>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-medium" style={{ color: 'var(--color-text)' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--color-secondary)' }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium" style={{ color: 'var(--color-text)' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--color-secondary)' }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium" style={{ color: 'var(--color-text)' }}>
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--color-secondary)' }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
