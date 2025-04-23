
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <h3 className="logo">DuduVieira<span>Dev</span></h3>
        
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experiência</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}>Formação</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
