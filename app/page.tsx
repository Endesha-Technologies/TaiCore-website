"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Enhanced Navbar */}
      <nav className="fixed top-0 w-full bg-[#0F172A]/80 backdrop-blur-md shadow-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Company Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-white">Endesha Technologies</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              onClick={() => setActiveSection("home")}
              className={`relative hover:text-[#3B82F6] transition-colors font-medium ${
                activeSection === "home" ? "text-[#3B82F6]" : "text-gray-300"
              }`}
            >
              Home
              {activeSection === "home" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3B82F6]"></span>
              )}
            </a>
            <a 
              href="#about" 
              onClick={() => setActiveSection("about")}
              className={`relative hover:text-[#3B82F6] transition-colors font-medium ${
                activeSection === "about" ? "text-[#3B82F6]" : "text-gray-300"
              }`}
            >
              About
              {activeSection === "about" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3B82F6]"></span>
              )}
            </a>
            <a 
              href="#services" 
              onClick={() => setActiveSection("services")}
              className={`relative hover:text-[#3B82F6] transition-colors font-medium ${
                activeSection === "services" ? "text-[#3B82F6]" : "text-gray-300"
              }`}
            >
              Services
              {activeSection === "services" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3B82F6]"></span>
              )}
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setActiveSection("portfolio")}
              className={`relative hover:text-[#3B82F6] transition-colors font-medium ${
                activeSection === "portfolio" ? "text-[#3B82F6]" : "text-gray-300"
              }`}
            >
              Portfolio
              {activeSection === "portfolio" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3B82F6]"></span>
              )}
            </a>
            <a href="#contact" className="bg-[#3B82F6] text-white px-6 py-2.5 rounded-lg hover:bg-[#2563EB] transition-colors font-semibold shadow-md hover:shadow-lg">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Premium Dark */}
      <section id="home" className="relative px-6 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left space-y-8">
              <h1 className="font-bold text-white leading-[1.2] py-6 md:py-8" style={{fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)'}}>
                We Build Software That Launches, Scales, and Lasts.
              </h1>
              
              <p className="text-gray-300 leading-relaxed pt-4" style={{fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: '1.6'}}>
                Endesha delivers full-stack web apps, mobile products, and AI integrations for startups and growing companies — from first prototype to production-grade scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <a href="#contact" className="group bg-[#3B82F6] text-white px-10 py-5 rounded-xl hover:bg-[#2563EB] transition-all duration-300 font-semibold shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transform text-center" style={{fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)'}}>
                  Book a Discovery Call
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#portfolio" className="group bg-white/10 text-white px-10 py-5 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold border-2 border-white/30 hover:border-white/50 backdrop-blur-sm text-center" style={{fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)'}}>
                  See Our Work
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              
              {/* Technology Text Logos */}
              <div className="pt-6">
                <p className="text-white/60 font-medium tracking-wide" style={{fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)'}}>
                  Built with <span className="text-white/70">React</span> · <span className="text-white/70">Flutter</span> · <span className="text-white/70">AWS</span> · <span className="text-white/70">OpenAI</span>
                </p>
              </div>
              
              {/* Subtle Divider */}
              <div className="pt-8 pb-2">
                <div className="w-full h-px bg-white/10"></div>
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-10 flex-wrap pt-4">
                <div>
                  <div className="font-bold text-[#60A5FA]" style={{fontSize: 'clamp(2rem, 3vw, 2.5rem)'}}>500+</div>
                  <div className="text-gray-400 mt-1 font-medium" style={{fontSize: 'clamp(0.8rem, 1.5vw, 1rem)'}}>Products Shipped</div>
                </div>
                <div>
                  <div className="font-bold text-[#60A5FA]" style={{fontSize: 'clamp(2rem, 3vw, 2.5rem)'}}>98%</div>
                  <div className="text-gray-400 mt-1 font-medium" style={{fontSize: 'clamp(0.8rem, 1.5vw, 1rem)'}}>Client Retention</div>
                </div>
                <div>
                  <div className="font-bold text-[#60A5FA]" style={{fontSize: 'clamp(2rem, 3vw, 2.5rem)'}}>8 Weeks</div>
                  <div className="text-gray-400 mt-1 font-medium" style={{fontSize: 'clamp(0.8rem, 1.5vw, 1rem)'}}>Average MVP Delivery</div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border-l-4 border-[#3B82F6] shadow-lg mt-6 max-w-2xl">
                <p className="text-gray-300 italic mb-4 leading-relaxed" style={{fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)'}}>
                  "Our platform went from zero to 40,000 users in three months and the infrastructure never flinched."
                </p>
                <div style={{fontSize: 'clamp(0.85rem, 1.5vw, 1rem)'}}>
                  <span className="font-bold text-white">Sarah K., CTO, Launchpad Inc.</span>
                </div>
              </div>
              
              {/* Bottom Text */}
              <p className="text-gray-400 pt-6 pb-8 text-left font-semibold" style={{fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)'}}>
                Fixed-price contracts. Senior engineers on every project. No handoffs to juniors.
              </p>
            </div>

            {/* Right Side - Product Screenshot */}
            <div className="relative hidden md:flex md:items-center md:justify-center">
              <div className="relative w-full max-w-2xl">
                {/* Device Frame with Enhanced Shadow */}
                <div className="bg-gray-800 rounded-3xl p-3 border-8 border-gray-700" style={{
                  boxShadow: '0 40px 80px -20px rgba(59, 130, 246, 0.3), 0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 mb-2 px-3 py-2 bg-gray-900 rounded-t-xl">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-500">
                      https://app.endesha.com
                    </div>
                  </div>
                  
                  {/* Real Dashboard Screenshot Mockup */}
                  <div className="w-full bg-white rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Analytics Dashboard</h3>
                      <p className="text-blue-100">Real-time performance metrics</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-[#1E40AF]">12.5K</div>
                          <div className="text-sm text-gray-600">Active Users</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-[#8B5CF6]">$2.5M</div>
                          <div className="text-sm text-gray-600">Revenue</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">98%</div>
                          <div className="text-sm text-gray-600">Uptime</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-semibold">Performance</span>
                          <span className="text-sm text-[#3B82F6]">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] h-3 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-semibold">API Response Time</span>
                          <span className="text-sm text-green-600">Fast</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-green-500 h-3 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Status Card */}
                <div className="absolute -bottom-4 -right-4 bg-[#1E293B] border border-white/10 rounded-xl p-5 shadow-2xl backdrop-blur-sm" style={{
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                }}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <div>
                      <div className="text-white font-semibold text-sm">New Project</div>
                      <div className="text-gray-400 text-xs">Kicked off today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#60A5FA]">About Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Endesha Technologies is a software engineering firm founded to help startups and growing companies build reliable digital products. We specialize in full-stack web applications, mobile solutions, and AI integrations that scale from prototype to production.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team brings decades of combined experience from leading tech companies, and we apply that expertise to every project we take on. We don't just write code — we build systems that last.
              </p>
            </div>
            
            {/* Right Column - Value Props */}
            <div className="space-y-8">
              {/* Senior Engineers Only */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center border border-[#3B82F6]/20">
                  <svg className="w-6 h-6 text-[#60A5FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Senior Engineers Only</h3>
                  <p className="text-gray-400">Every project is staffed with experienced engineers. No juniors, no handoffs, no surprises.</p>
                </div>
              </div>
              
              {/* Transparent Pricing */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center border border-[#3B82F6]/20">
                  <svg className="w-6 h-6 text-[#60A5FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
                  <p className="text-gray-400">Fixed-price contracts with clear milestones. You know exactly what you're paying for.</p>
                </div>
              </div>
              
              {/* On-Time Delivery */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center border border-[#3B82F6]/20">
                  <svg className="w-6 h-6 text-[#60A5FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">On-Time Delivery</h3>
                  <p className="text-gray-400">We ship on schedule. Our average MVP delivery is 8 weeks from kickoff to launch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#60A5FA]">Services</h2>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#60A5FA]">Portfolio</h2>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#60A5FA]">Contact</h2>
          <form className="bg-[#1E293B] p-8 rounded-lg shadow-lg space-y-6 border border-white/10">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-[#0F172A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-[#0F172A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors" />
            <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 bg-[#0F172A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"></textarea>
            <button type="submit" className="w-full bg-[#3B82F6] text-white py-4 rounded-lg hover:bg-[#2563EB] transition-colors font-semibold shadow-lg shadow-blue-500/20">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Endesha Technologies</h3>
          <p className="text-gray-400">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
