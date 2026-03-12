export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      icon: '🌐',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: '📱',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience',
      icon: '🎨',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services',
      icon: '☁️',
    },
    {
      title: 'Consulting',
      description: 'Strategic technology consulting to guide your digital transformation',
      icon: '💡',
    },
    {
      title: 'Maintenance',
      description: 'Ongoing support and maintenance for your digital products',
      icon: '🔧',
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
          Our Services
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your business needs
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                {service.title}
              </h3>
              <p style={{ color: 'var(--color-text)' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
