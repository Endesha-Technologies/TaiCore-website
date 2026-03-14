"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../app/images/logo.png";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 120;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300`}
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.72)" : "rgba(255, 255, 255, 0.45)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: scrolled
          ? "1px solid rgba(234, 179, 8, 0.18)"
          : "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.07), 0 1px 0 rgba(234,179,8,0.08)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={() => handleClick("home")} className="flex items-center">
          <Image src={logo} alt="TaiCore Digital Systems" width={130} height={44} className="object-contain" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleClick(id)}
              className={`relative font-semibold text-sm transition-colors ${
                activeSection === id ? "text-gray-900" : "text-gray-900 hover:text-gray-900"
              }`}
            >
              {label}
              {activeSection === id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gray-900 block"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-gray-900 block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gray-900 block"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.82)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              borderTop: "1px solid rgba(234, 179, 8, 0.15)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => handleClick(id)}
                  className={`text-base font-semibold transition-colors py-2 ${
                    activeSection === id ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
