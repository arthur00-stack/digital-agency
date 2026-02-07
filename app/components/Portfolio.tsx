export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Fashion',
      category: 'E-commerce',
      description: 'Plateforme de vente en ligne avec +50k utilisateurs',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Application SaaS',
      category: 'Web App',
      description: 'Solution B2B pour la gestion de projets',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Site Corporate',
      category: 'Website',
      description: 'Site vitrine pour une multinationale',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Marketplace',
      category: 'Platform',
      description: 'Plateforme de mise en relation B2B',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className={`h-64 bg-gradient-to-br ${project.color} p-8 flex flex-col justify-end`}>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl transform group-hover:scale-105 transition-transform">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}