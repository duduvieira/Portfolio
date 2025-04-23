
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experiência Profissional</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <h3>Desenvolvedor Mobile</h3>
              <h4>FRS SISTEMAS</h4>
              <p className="timeline-date">2023 - Atual</p>
              <p>
                Desenvolvimento e manutenção de aplicações mobile com foco na 
                implementação de software customizado para a indústria siderúrgica,
                utilizando React Native, API's REST, SQLite e JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
