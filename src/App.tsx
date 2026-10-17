import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import SobreNosotros from './pages/SobreNosotros'
import Presentaciones from './pages/Presentaciones'
import Directiva from './pages/Directiva'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/presentaciones" element={<Presentaciones />} />
          <Route path="/directiva" element={<Directiva />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App