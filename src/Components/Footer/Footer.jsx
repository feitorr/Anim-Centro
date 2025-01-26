import './Footer.css';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Ícones adicionais
import logo from "../Header/logo2.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo e informações básicas */}
        <div className="footer-logo">
          <NavLink to="/">
            <img
              src={logo} // Substitua pelo caminho correto para o logo
              alt="Logo"
              className="footer-logo-img"
            />
          </NavLink>
          <p>© 2025 AnimÓCentro. Todos os direitos reservados.</p>
        </div>

         {/* Informações de contato */}
         <div className="footer-contact">
          <p>
            <FaPhoneAlt /> <span>+351 123 456 789</span>
          </p>
          <p>
            <FaEnvelope /> <span>contato@animocentro.pt</span>
          </p>
          <p>Rua dos Animais Felizes, nº 42, Lisboa, Portugal</p>
        </div>

        {/* Redes sociais */}
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
