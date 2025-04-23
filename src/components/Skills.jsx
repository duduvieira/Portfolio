
import React from 'react';
import { FiCode, FiDatabase, FiSmartphone, FiMonitor, FiServer } from 'react-icons/fi';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-icon">
              <FiSmartphone />
            </div>
            <h3>Desenvolvimento Mobile</h3>
            <ul>
              <li>React Native</li>
              <li>Expo</li>
              <li>SQLite</li>
              <li>Firebase</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <div className="skill-icon">
              <FiCode />
            </div>
            <h3>Linguagens</h3>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <div className="skill-icon">
              <FiMonitor />
            </div>
            <h3>Front-end</h3>
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <div className="skill-icon">
              <FiServer />
            </div>
            <h3>DevOps & Outros</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Unity 3D</li>
              <li>Hardware</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <div className="skill-icon">
              <FiDatabase />
            </div>
            <h3>Banco de Dados</h3>
            <ul>
              <li>SQLite</li>
              <li>Firebase</li>
              <li>REST APIs</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;