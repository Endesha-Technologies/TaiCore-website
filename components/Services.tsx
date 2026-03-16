"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import ServiceCard from "./ui/ServiceCard";

const services = [
  {
    number: "01",
    title: "Full-Stack Web Applications",
    description:
      "Custom web platforms built with Next.js, React, and Node.js. From SaaS dashboards to marketplace platforms.",
    featured: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps with React Native and Flutter. iOS and Android, one codebase.",
    featured: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for performance. Third-party integrations and microservices architecture.",
    featured: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Cloud Hosting & Infrastructure",
    description:
      "Reliable hosting solutions with AWS, Azure, and Google Cloud. Scalable infrastructure, automated deployments, and 24/7 monitoring.",
    featured: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Product Strategy & Design",
    description:
      "UI/UX design, product roadmapping, and technical architecture consulting to align tech with business goals.",
    featured: false,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <AnimateOnScroll className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                What We Build
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed font-medium md:text-right">
              End-to-end engineering for every layer of your product — from concept to production.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Creative Grid Layout */}
        {/* lg: col-span-1 featured (row-span-2) | col 2 | col 3 */}
        {/*     --same--                          | col-span-2 card  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:grid-rows-2">

          {/* Card 01 - Featured dark, spans 2 rows */}
          <div className="lg:row-span-2">
            <ServiceCard {...services[0]} delay={0} />
          </div>

          {/* Card 02 */}
          <div className="lg:col-span-1">
            <ServiceCard {...services[1]} delay={0.1} />
          </div>

          {/* Card 03 */}
          <div className="lg:col-span-1">
            <ServiceCard {...services[2]} delay={0.2} />
          </div>

          {/* Card 04 */}
          <div className="lg:col-span-1">
            <ServiceCard {...services[3]} delay={0.3} />
          </div>

          {/* Card 05 */}
          <div className="lg:col-span-1">
            <ServiceCard {...services[4]} delay={0.4} />
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 rounded-2xl px-8 py-6 border border-gray-100"
        >
          <div>
            <p className="font-extrabold text-gray-900 text-base">Not sure what you need?</p>
            <p className="text-sm text-gray-500 font-medium mt-0.5">We&apos;ll help you figure it out — no commitment required.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-primary text-gray-900 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-yellow-400 hover:-translate-y-0.5 transform transition-all duration-300"
          >
            Talk to us →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
