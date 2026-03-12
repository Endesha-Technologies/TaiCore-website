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
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Enhanced Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Company Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-[#1E40AF]">Endesha Technologies</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              onClick={() => setActiveSection("home")}
              className={`relative hover:text-[#3B82F6] transition-colors font-medium ${
                activeSection === "home" ? "text-[#3B82F6]" : "text-gray-700"
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
                activeSection === "about" ? "text-[#3B82F6]" : "text-gray-700"
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
                activeSection === "services" ? "text-[#3B82F6]" : "text-gray-700"
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
                activeSection === "portfolio" ? "text-[#3B82F6]" : "text-gray-700"
              }`}
            >
              Portfolio
              {activeSection === "portfolio" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3B82F6]"></span>
              )}
            </a>
            <a href="#contact" className="bg-[#3B82F6] text-white px-6 py-2.5 rounded-lg hover:bg-[#1E40AF] transition-colors font-semibold shadow-md hover:shadow-lg">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Improved with Animated Background */}
      <section id="home" className="relative pt-40 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Floating Code Elements */}
          <div className="absolute top-20 left-10 text-[#3B82F6]/10 font-mono text-2xl animate-float">&lt;/&gt;</div>
          <div className="absolute top-40 right-20 text-[#8B5CF6]/10 font-mono text-3xl animate-float" style={{animationDelay: '0.5s'}}>{ }</div>
          <div className="absolute bottom-40 left-20 text-[#3B82F6]/10 font-mono text-2xl animate-float" style={{animationDelay: '1s'}}>[ ]</div>
          <div className="absolute bottom-20 right-40 text-[#8B5CF6]/10 font-mono text-3xl animate-float" style={{animationDelay: '1.5s'}}>( )</div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-left space-y-8">
              <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                <span className="text-[#3B82F6] font-semibold text-sm">🚀 Trusted by 500+ Companies</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-tight">
                We Build Scalable Software for Modern Businesses
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                We design and develop high-performance web applications, mobile apps, and AI solutions for startups and enterprises.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <a href="#contact" className="group bg-[#3B82F6] text-white px-10 py-5 rounded-xl hover:bg-[#1E40AF] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transform text-center">
                  Start a Project
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#portfolio" className="group bg-white text-[#3B82F6] px-10 py-5 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg border-2 border-[#3B82F6] hover:border-[#1E40AF] hover:shadow-lg text-center">
                  View Our Work
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-10 flex-wrap pt-8">
                <div>
                  <div className="text-4xl font-bold text-[#1E40AF]">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#1E40AF]">98%</div>
                  <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#1E40AF]">24/7</div>
                  <div className="text-sm text-gray-600 mt-1">Support Available</div>
                </div>
              </div>
            </div>

            {/* Right Side - Dashboard UI Preview & Tech Illustration */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-[550px]">
                {/* Main Dashboard Preview Card */}
                <div className="absolute top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs text-gray-400">Dashboard Preview</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-lg text-white">
                      <div>
                        <div className="text-sm opacity-90">Total Revenue</div>
                        <div className="text-2xl font-bold">$2.5M</div>
                      </div>
                      <div className="text-3xl">📈</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-xs text-gray-600">Active Users</div>
                        <div className="text-xl font-bold text-[#1E40AF]">12.5K</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-xs text-gray-600">Projects</div>
                        <div className="text-xl font-bold text-[#8B5CF6]">248</div>
                      </div>
                    </div>
                    
                    {/* Progress Bars */}
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Development</span>
                          <span className="text-[#3B82F6] font-semibold">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Testing</span>
                          <span className="text-[#3B82F6] font-semibold">60%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Success Card */}
                <div className="absolute bottom-0 right-0 w-56 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-sm">Deployed</div>
                      <div className="text-xs text-gray-500">Production ready</div>
                    </div>
                  </div>
                </div>

                {/* Code Brackets Decoration */}
                <div className="absolute -top-4 -left-4 text-6xl text-[#3B82F6]/20 font-mono">&lt;</div>
                <div className="absolute -bottom-4 -right-4 text-6xl text-[#8B5CF6]/20 font-mono">/&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E40AF]">About Us</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">Endesha Technologies delivers innovative solutions for digital transformation.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E40AF]">Services</h2>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E40AF]">Portfolio</h2>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E40AF]">Contact</h2>
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
            <button type="submit" className="w-full bg-[#3B82F6] text-white py-4 rounded-lg hover:bg-[#1E40AF]">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E40AF] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Endesha Technologies</h3>
          <p className="text-blue-200">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
