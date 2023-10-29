import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import myImage from './logo.png'; // Importe a imagem
import { Link } from 'react-scroll'; // Importe o componente Link




function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Começa mostrando o menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para verificar se a página foi rolada para baixo
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowNavbar(false); // Oculta o menu quando a página é rolada para baixo
    } else {
      setShowNavbar(true); // Mostra o menu quando a página é rolada para o topo
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${showNavbar ? 'show' : ''}`}>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      <img src={myImage} alt="Minha Imagem" className='logominha' />
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>


        <Link
          to="inicio"
          smooth={true}
          duration={500}
          style={{ cursor: 'pointer' }} // Aplica o cursor pointer
        >
          <a href="#inicio">Inicio</a>
        </Link>

        <Link
          to="servicos"
          smooth={true}
          duration={500}
          style={{ cursor: 'pointer' }} // Aplica o cursor pointer
        >
          <a href="#servicos">Serviços</a>
        </Link>

        <Link
          to="qualidades"
          smooth={true}
          duration={500}
          style={{ cursor: 'pointer' }} // Aplica o cursor pointer
        >
          <a href="#qualidades">Qualidades</a>
        </Link>


        <Link
          to="sobremim"
          smooth={true}
          duration={500}
          style={{ cursor: 'pointer' }} // Aplica o cursor pointer
        >
          <a href="#servicos">Quem e nikolas?</a>
        </Link>

        <Link
          to="contratenos"
          smooth={true}
          duration={500}
          style={{ cursor: 'pointer' }} // Aplica o cursor pointer
        >
          <a href="#servicos">Contrate-nos</a>
        </Link>


      </div>
    </div>
  );
}

export default Navbar;
