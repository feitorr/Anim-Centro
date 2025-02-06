import './Header.css';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../Header/logo2.png";

function Header() {
  // Estado para controlar a exibição do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para controlar a mudança de fundo ao rolar
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para controlar a altura do header
  const [headerHeight, setHeaderHeight] = useState('100px'); // Altura padrão

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setHeaderHeight(isMenuOpen ? '100px' : '240px'); // Quando o menu está aberto, aumenta a altura
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
    <header 
      className={`header ${isScrolled ? 'scrolled' : ''}`} 
      style={{ height: headerHeight }} // Aplicando a altura dinâmica
    >
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <img
              src={logo} // Substitua por seu caminho de logo
              alt="Logo"
            />
          </NavLink>
        </div>

         {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
  <NavLink 
    to="/sobrenos" 
    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
  >
    SOBRE NÓS
  </NavLink>
  <NavLink 
    to="/servicos" 
    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
  >
    OS NOSSOS SERVIÇOS
  </NavLink>
  <NavLink 
    to="/contatos" 
    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
  >
    CONTATOS
  </NavLink>
  <NavLink 
    to="/admin" 
    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
  >
    LOGIN
  </NavLink>
</nav>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu} aria-label="Abrir menu">
          {/* Ícone de menu (hamburger) que vira em X quando o menu é aberto */}
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
