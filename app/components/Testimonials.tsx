export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'CEO, TechStart',
      content: 'DigitalCraft a transformé notre présence en ligne. Leur expertise et professionnalisme sont remarquables.',
      avatar: '👩‍💼',
    },
    {
      name: 'Thomas Martin',
      role: 'Directeur Marketing, InnovateCo',
      content: 'Une équipe créative et réactive qui a su comprendre nos besoins et dépasser nos attentes.',
      avatar: '👨‍💼',
    },
    {
      name: 'Sophie Laurent',
      role: 'Fondatrice, StyleShop',
      content: 'Grâce à leur travail, nos ventes en ligne ont augmenté de 300% en 6 mois. Incroyable !',
      avatar: '👩‍🎨',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex mt-4 text-yellow-400">
                {'★'.repeat(5)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}