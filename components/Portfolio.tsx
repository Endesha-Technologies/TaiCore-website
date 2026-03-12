export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration',
      category: 'Web Development',
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking solution for iOS and Android',
      category: 'Mobile App',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for business intelligence',
      category: 'Web Development',
    },
    {
      title: 'Healthcare Portal',
      description: 'Patient management system for healthcare providers',
      category: 'Web Development',
    },
    {
      title: 'Fitness Tracker',
      description: 'Cross-platform fitness and wellness application',
      category: 'Mobile App',
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management system',
      category: 'Web Development',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
          Our Portfolio
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Showcasing our recent projects and success stories
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="h-48 flex items-center justify-center text-white text-6xl"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                💼
              </div>
              <div className="p-6">
                <span
                  className="text-sm font-medium px-3 py-1 rounded-full inline-block mb-2"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
                >
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--color-text)' }}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
