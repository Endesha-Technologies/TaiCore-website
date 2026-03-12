export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
              About Endesha
            </h2>
            <p className="text-lg mb-4" style={{ color: 'var(--color-text)' }}>
              We are a team of passionate developers, designers, and strategists dedicated to creating 
              exceptional digital experiences.
            </p>
            <p className="text-lg mb-4" style={{ color: 'var(--color-text)' }}>
              With years of experience in the industry, we combine technical expertise with creative 
              thinking to deliver solutions that exceed expectations.
            </p>
            <p className="text-lg" style={{ color: 'var(--color-text)' }}>
              Our mission is to empower businesses through technology, helping them achieve their goals 
              and stay ahead in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>50+</div>
              <div style={{ color: 'var(--color-text)' }}>Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>30+</div>
              <div style={{ color: 'var(--color-text)' }}>Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>5+</div>
              <div style={{ color: 'var(--color-text)' }}>Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>100%</div>
              <div style={{ color: 'var(--color-text)' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
