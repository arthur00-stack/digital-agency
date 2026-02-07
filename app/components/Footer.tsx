export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DigitalCraft</h3>
            <p className="text-gray-400">
              Votre partenaire digital pour des solutions innovantes et performantes.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Développement Web</a></li>
              <li><a href="#" className="hover:text-white transition">Design UI/UX</a></li>
              <li><a href="#" className="hover:text-white transition">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-white transition">E-commerce</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">À propos</a></li>
              <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition">Carrières</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-indigo-400 transition">🔗</a>
              <a href="#" className="hover:text-indigo-400 transition">🐦</a>
              <a href="#" className="hover:text-indigo-400 transition">📸</a>
              <a href="#" className="hover:text-indigo-400 transition">💼</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DigitalCraft. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}