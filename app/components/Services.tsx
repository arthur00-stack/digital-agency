export default function Services() {
  const services = [
    {
      title: 'Développement Web',
      description: 'Sites web modernes et performants avec les dernières technologies',
      icon: '💻',
    },
    {
      title: 'Design UI/UX',
      description: 'Expériences utilisateur intuitives et designs épurés',
      icon: '🎨',
    },
    {
      title: 'Marketing Digital',
      description: 'Stratégies sur-mesure pour maximiser votre visibilité en ligne',
      icon: '📱',
    },
    {
      title: 'E-commerce',
      description: 'Solutions complètes pour vendre vos produits en ligne',
      icon: '🛒',
    },
    {
      title: 'SEO & Analytics',
      description: 'Optimisation et analyse de vos performances digitales',
      icon: '📊',
    },
    {
      title: 'Maintenance',
      description: 'Support continu et évolutions de vos plateformes',
      icon: '🔧',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour propulser votre présence digitale
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}