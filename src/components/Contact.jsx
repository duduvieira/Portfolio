
import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contato</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>duduvieiradev@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <div>
                <h3>Telefone</h3>
                <p>(99) 99207-5219</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <div>
                <h3>Localização</h3>
                <p>Açailândia - MA</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;