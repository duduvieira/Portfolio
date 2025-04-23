
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Eduardo Vieira</h1>
          <h2>Desenvolvedor Mobile Fullstack</h2>
          <p className="hero-description">
            Apaixonado por criar soluções eficientes e escaláveis para o mundo mobile.
          </p>
          
          <div className="hero-cta">
            <a href="#contact" className="btn">Entre em contato</a>
            <a href="#projects" className="btn btn-outline">Ver projetos</a>
          </div>
          
          <div className="social-links">
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
    </section>
  );
};

export default Hero;