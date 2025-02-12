import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import SobreNos from './pages/SobreNos/SobreNos';
import Servicos from './pages/Servicos/Servicos';
import Contatos from './pages/Contatos/Contatos';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import CrudS from './Components/CrudS/CrudS';
import Cardpage from './pages/Cardpage/Cardpage';
import Loginpage from './pages/Loginpage/Loginpage';
import CrudU from './Components/CrudU/CrudU';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/crudS" element={<CrudS />} />
          <Route path="/crudU" element={<CrudU />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/cardinfo/:id" element={<Cardpage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
