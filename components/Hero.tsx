export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
          Welcome to Endesha
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--color-text)' }}>
          We build modern digital solutions that transform your business and drive growth
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Get Started
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 rounded-lg font-medium border-2 hover:opacity-80 transition-opacity"
            style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
