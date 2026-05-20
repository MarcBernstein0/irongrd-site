import Navbar from './components/Navbar/Navbar'
import HeroCarousel from './components/HeroCarousel/HeroCarousel'
import QuickLinks from './components/QuickLinks/QuickLinks'
import NewsSection from './components/NewsSection/NewsSection'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router'
import TermsOfService from './pages/TermsOfService'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/terms-of-service' element={<TermsOfService />} />
      </Routes>
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
