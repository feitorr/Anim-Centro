import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import SobreNos from './pages/SobreNos/SobreNos'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sobrenos" element={<SobreNos />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
