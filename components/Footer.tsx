"use client";

import Image from "next/image";
import logo from "../app/images/logo.png";
import AnimateOnScroll from "./ui/AnimateOnScroll";

const socials = [
  { label: "X (Twitter)", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Application Development",
  "Mobile App Development",
  "AI & ML Integration",
  "Cloud Infrastructure",
  "UI/UX Design",
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">

      {/* ── CTA Banner ── */}
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 border-b border-gray-200">
          <div
            className="rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-primary/10 border border-primary/20"
          >
            <div>
              <h3 className="text-gray-900 text-xl font-extrabold mb-1">Ready to build something great?</h3>
              <p className="text-gray-600 text-sm">Let&apos;s turn your idea into a product that ships and scales.</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 bg-primary text-gray-900 font-bold px-7 py-3 rounded-xl text-sm hover:bg-yellow-400 hover:-translate-y-0.5 transform transition-all duration-200"
            >
              Start a Project →
            </a>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Main Grid ── */}
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <Image src={logo} alt="TaiCore Digital Systems" width={140} height={48} className="object-contain" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Software engineering that ships. From prototype to production-grade scale.
            </p>
            <div className="flex gap-3 pt-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors bg-white border border-gray-200 hover:bg-primary/20 hover:border-primary/30"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-5 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-5 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-gray-600 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-5 uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:hello@taicore.io" className="text-gray-700 text-sm hover:text-primary transition-colors">
                  hello@taicore.io
                </a>
              </li>
              <li>
                <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Location</div>
                <span className="text-gray-700 text-sm">Nairobi, Kenya</span>
              </li>
              <li>
                <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Hours</div>
                <span className="text-gray-700 text-sm">Mon – Fri, 9am – 6pm EAT</span>
              </li>
            </ul>
          </div>

        </div>
      </AnimateOnScroll>

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-xs">
          &copy; 2026 TaiCore Digital Systems. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs">
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
