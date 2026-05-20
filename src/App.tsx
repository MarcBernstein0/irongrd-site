import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router'
import TermsOfServicePage from './pages/TermsOfServicePage'
import GamesPage from './pages/GamesPage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/terms-of-service' element={<TermsOfServicePage />} />
        <Route path='/games' element={<GamesPage />} />
      </Routes>
      
      
      <Footer />
    </>
  )
}
