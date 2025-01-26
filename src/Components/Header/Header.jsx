import './Header.css';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../Header/logo2.png";
import { Link } from "react-router-dom";
function Header() {
  // Estado para controlar a exibição do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para controlar a mudança de fundo ao rolar
  const [isScrolled, setIsScrolled] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para detectar o scroll e aplicar a classe scrolled
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true); // Adiciona a classe quando houver scroll
    } else {
      setIsScrolled(false); // Remove a classe quando estiver no topo
    }
  };

  // Hook para adicionar o listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Limpar o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo */}
        <div className="logo">
        <Link to="/">
          <img
            src={logo} // Substitua por seu caminho de logo
            alt="Logo"
          />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="/sobrenos" className="nav-link">
            SOBRE NÓS
          </a>
          <a href="#" className="nav-link">
            OS NOSSO SERVIÇOS
          </a>
          <a href="#" className="nav-link">
            CONTATOS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu} aria-label="Abrir menu">
          {/* Icone de menu (hamburger) que vira em X quando o menu é aberto */}
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
