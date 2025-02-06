import React, { useEffect, useState } from "react";
import "./Contatos.css"; 
import Header from "../../Components/Header/Header";
import video from "../Homepage/video_background2.mp4";
import ScrollIndicator from "../../Components/ScrollIndicator/ScrollIndicator";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Components/Footer/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importando ícones das redes sociais
import Swal from "sweetalert2"; // Importando SweetAlert2

const Contatos = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Exibindo o alerta de sucesso
    Swal.fire({
      title: 'Obrigado por entrar em contato!',
      text: 'Responderemos em breve.',
      icon: 'success',
      confirmButtonText: 'Fechar'
    });

    // Limpando o formulário
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <>
      <div className="homepage-container">
        <Header />
        <div className="video-background">
          <video autoPlay loop muted className="video">
            <source src={video} type="video/mp4" />
          </video>
          <div className="welcome-text">
            <h1>CONTATOS</h1>
          </div>
        </div>
      </div>
      <ScrollIndicator />
      <div className="contact-section">
        <div className="contact-container">

          {/* Informações de contato */}
          <div className="contact-info" data-aos="fade-up">
            <h2>INFORMAÇÕES DE CONTATO</h2>
            <p><FaPhoneAlt />  +351 123 456 789</p>
            <p><FaEnvelope />  contato@animocentro.pt</p>
            <p><FaMapMarkerAlt />  Rua dos Monhés, nº 42, Coimbra, Portugal</p>
            <h3>REDES SOCIAIS</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="form-container" data-aos="fade-up">
            <h2>FALE CONOSCO</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Insira seu nome"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Insira seu e-mail"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Insira sua mensagem"
                  required
                />
              </div>
              <button type="submit" className="submit-button">Enviar</button>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contatos;
