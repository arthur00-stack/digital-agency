import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import Portfolio from '@/app/components/Portfolio'
import Testimonials from '@/app/components/Testimonials'
import Footer from '@/app/components/Footer'
import contacts from '@/app/components/Contacts'
import Contacts from '@/app/components/Contacts'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </main>
  )
}