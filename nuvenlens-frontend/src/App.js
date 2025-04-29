import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Upload from './pages/Upload';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Galeria from './pages/Galeria';
import Login from './pages/Login';
import Esquecisenha from './pages/Esquecisenha';
import CookieModal from './pages/CookieModal';
import PerfilUusario from './pages/PerfilUsuario';
import Administrador from './pages/Administrador';
import Politica from './pages/Politica';
import Termos from './pages/Termos';
import Moderador from './pages/Moderador';
import EditarPerfil from './pages/Editarperfil';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/login" element={<Login />} />
        <Route path="/esquecisenha" element={<Esquecisenha />} />
        <Route patha="/cookieModal" element={<CookieModal />} />
        <Route path="/perfilUsuario" element={<PerfilUusario />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/moderador" element={<Moderador />} />
        <Route path="/editarperfil" element={<EditarPerfil />} />
      </Routes>
      <Footer /> {}
    </Router>

    </>


    
  );
}
export default App;

