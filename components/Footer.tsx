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
    <footer className="border-t border-gray-100" style={{ background: "#0D1117" }}>

      {/* ── CTA Banner ── */}
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 border-b border-white/5">
          <div
            className="rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, rgba(132,204,22,0.12) 0%, rgba(132,204,22,0.04) 100%)", border: "1px solid rgba(132,204,22,0.18)" }}
          >
            <div>
              <h3 className="text-white text-xl font-extrabold mb-1">Ready to build something great?</h3>
              <p className="text-white/50 text-sm">Let&apos;s turn your idea into a product that ships and scales.</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 bg-primary text-gray-900 font-bold px-7 py-3 rounded-xl text-sm hover:brightness-110 hover:-translate-y-0.5 transform transition-all duration-200"
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
            <p className="text-white/40 text-sm leading-relaxed">
              Software engineering that ships. From prototype to production-grade scale.
            </p>
            <div className="flex gap-3 pt-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(132,204,22,0.15)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                >
                  <svg className="w-4 h-4 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 text-sm hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
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
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-white/45 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <div className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:hello@taicore.io" className="text-white/60 text-sm hover:text-primary transition-colors">
                  hello@taicore.io
                </a>
              </li>
              <li>
                <div className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Location</div>
                <span className="text-white/60 text-sm">Nairobi, Kenya</span>
              </li>
              <li>
                <div className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Hours</div>
                <span className="text-white/60 text-sm">Mon – Fri, 9am – 6pm EAT</span>
              </li>
            </ul>
          </div>

        </div>
      </AnimateOnScroll>

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-6">
        <p className="text-white/25 text-xs">
          &copy; 2026 TaiCore Digital Systems. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs">
          <a href="#" className="text-white/25 hover:text-white/50 transition-colors">Privacy Policy</a>
          <a href="#" className="text-white/25 hover:text-white/50 transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
