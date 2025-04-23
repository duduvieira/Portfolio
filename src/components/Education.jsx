
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Formação</h2>
        
        <div className="education-container">
          <div className="education-section">
            <h3>Formação Acadêmica</h3>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content card">
                  <h4>Análise e Desenvolvimento de Sistemas</h4>
                  <p className="institution">Faculdade Descomplica - UNIAMÉRICA</p>
                  <p className="timeline-date">2025 - 2027</p>
                  <p>Tecnólogo em andamento</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content card">
                  <h4>Técnico em Informática</h4>
                  <p className="institution">IFMA - Campus Açailândia</p>
                  <p className="timeline-date">2022 - 2024</p>
                  <p>Ensino Médio Integrado ao Técnico - Conclúido</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="education-section">
            <h3>Formação Complementar</h3>
            
            <div className="courses-grid">
              <div className="course-card card">
                <h4>Programa Trilhas Inova</h4>
                <p className="course-focus">Programação Front-end</p>
                <p className="timeline-date">2024</p>
                <p>HTML, CSS, Javascript e Lógica de Programação</p>
              </div>
              
              <div className="course-card card">
                <h4>CCNAv7: Introdução a Redes de Computadores</h4>
                <p className="course-focus">Cisco</p>
                <p className="timeline-date">2023</p>
                <p>Fundamentos de redes de computadores</p>
              </div>
              
              <div className="course-card card">
                <h4>IT Essentials</h4>
                <p className="course-focus">Cisco</p>
                <p className="timeline-date">2023</p>
                <p>Hardware, Manutenção e Montagem de computadores</p>
              </div>
              
              <div className="course-card card">
                <h4>Introdução ao Linux</h4>
                <p className="course-focus">Cisco</p>
                <p className="timeline-date">2023</p>
                <p>Fundamentos do sistema Linux</p>
              </div>
              
              <div className="course-card card">
                <h4>Robótica Educacional</h4>
                <p className="timeline-date">2022</p>
                <p>Scratch, Pensamento computacional e Algoritmos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
