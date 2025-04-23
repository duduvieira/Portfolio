
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Eduardo<span>Dev</span></h3>
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#experience">Experiência</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#education">Formação</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-social">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a href="https://github.com/duduvieira" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/dudu-vieira-dev" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href="mailto:duduvieiradev@gmail.com">
                <FiMail />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Eduardo Vieira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;