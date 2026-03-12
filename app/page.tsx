export default function Home() {
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
            <a href="#home" className="text-gray-700 hover:text-[#3B82F6] transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[#3B82F6] transition-colors font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-[#3B82F6] transition-colors font-medium">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-[#3B82F6] transition-colors font-medium">Portfolio</a>
            <a href="#contact" className="bg-[#3B82F6] text-white px-6 py-2.5 rounded-lg hover:bg-[#1E40AF] transition-colors font-semibold shadow-md hover:shadow-lg">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Improved */}
      <section id="home" className="pt-32 pb-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full">
                <span className="text-[#3B82F6] font-semibold text-sm">🚀 Trusted by 500+ Companies</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#0F172A] leading-tight">
                Transform Your Business with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"> Cutting-Edge Tech</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                We deliver enterprise-grade software solutions that drive growth, increase efficiency, and give you a competitive edge in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-[#3B82F6] text-white px-8 py-4 rounded-lg hover:bg-[#1E40AF] transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform text-center">
                  Start Your Project
                </a>
                <a href="#portfolio" className="bg-white text-[#3B82F6] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg border-2 border-[#3B82F6] text-center">
                  View Our Work
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex items-center gap-8 flex-wrap">
                <div>
                  <div className="text-3xl font-bold text-[#1E40AF]">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1E40AF]">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1E40AF]">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-[500px]">
                {/* Floating Cards Animation */}
                <div className="absolute top-0 right-0 w-64 h-40 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A]">Project Complete</div>
                      <div className="text-sm text-gray-500">On time delivery</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] h-2 rounded-full w-full"></div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-0 w-64 h-40 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2">$2.5M+</div>
                  <div className="text-blue-100">Revenue Generated for Clients</div>
                  <div className="mt-3 text-sm">↑ 145% Growth</div>
                </div>

                <div className="absolute top-32 left-12 w-48 h-48 bg-[#8B5CF6]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-12 w-48 h-48 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
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
