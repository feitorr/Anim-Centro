import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import SobreNos from './pages/SobreNos/SobreNos'
import Servicos from './pages/Servicos/Servicos';
import Contatos from './pages/Contatos/Contatos';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init(); // Inicializa o AOS

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
