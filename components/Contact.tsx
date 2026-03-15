"use client";

import { useState } from "react";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors";

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Let's Build Something Great"
          subtitle="Tell us about your project and we'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <AnimateOnScroll direction="left" className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get in touch
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you have a project in mind or just want to explore how
                we can help, we&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-text-muted text-sm">Email</div>
                  <div className="text-gray-900 font-medium">hello@taicore.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-text-muted text-sm">Location</div>
                  <div className="text-gray-900 font-medium">Nairobi, Kenya</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-text-muted text-sm">Response time</div>
                  <div className="text-gray-900 font-medium">Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z" },
                { label: "GitHub", path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" },
                { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Right - Form */}
          <AnimateOnScroll direction="right" className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl border border-gray-200 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClasses} ${!formData.budget ? "text-text-muted" : ""}`}
                  >
                    <option value="" disabled>
                      Budget Range
                    </option>
                    <option value="<10k">&lt; $10,000</option>
                    <option value="10k-50k">$10,000 – $50,000</option>
                    <option value="50k-100k">$50,000 – $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-gray-900 py-4 rounded-xl font-semibold hover:bg-yellow-400 hover:scale-[1.01] transform transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
