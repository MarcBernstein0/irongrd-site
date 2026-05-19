import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import QuickLinks from './components/QuickLinks'
import NewsSection from './components/NewsSection'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <QuickLinks />
        <NewsSection />
        <Partners />
      </main>
      <Footer />
    </>
  )
}
