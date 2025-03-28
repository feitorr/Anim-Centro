import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import "./Homepage.css"; // Para incluir os estilos
import video from "../Homepage/video_background2.mp4";
import ScrollIndicator from "../../Components/ScrollIndicator/ScrollIndicator";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Components/Footer/Footer";
import Carrosel from "../../Components/Carrrosel/Carrosel";

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Configuração da duração (1 segundo)
  }, []);

  return (
    <>
      <div className="homepage-container">
        <Header />
        <div className="video-background">
          <video autoPlay loop muted className="video">
            <source src={video} type="video/mp4" />
          </video>
          <div className="welcome-text">
            <h1>BEM-VINDO AO NOSSO SITE</h1>
          </div>
        </div>
      </div>
      <ScrollIndicator />
      {/* Efeitos AOS aplicados apenas a partir daqui */}
      <div className="sobre-nos-container" data-aos="fade-up">
        <h1>SOBRE NÓS</h1>
        <p data-aos="fade-up">
        Conheça a AnimÓCentro, o centro da animação! 
        </p>
        <p data-aos="fade-up">
        A AnimÓCentro é uma empresa de animação turística criada por duas sócias com o objetivo de tornar a sua estadia no Centro de Portugal ainda mais especial.
        </p>
        <p data-aos="fade-up">
        complementam a sua visita, proporcionando experiências autênticas e memoráveis, que ajudam a descobrir o que torna esta região única. 
        </p>
        <p data-aos="fade-up">
        Queremos que cada visitante leve para casa não apenas boas recordações, mas também uma verdadeira ligação ao Centro de Portugal.
        </p>

        <NavLink to="/sobrenos">
          <button className="btn-saber-mais" >
            SABER MAIS
          </button>
        </NavLink>
        <h1>OS NOSSOS SERVIÇOS</h1>
        <Carrosel/>
      </div>
      
      <Footer/>
    </>
  );
};

export default Homepage;
