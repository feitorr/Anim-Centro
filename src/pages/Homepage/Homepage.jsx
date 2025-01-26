import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import "./Homepage.css"; // Para incluir os estilos
import video from "../Homepage/video_background.mp4";
import ScrollIndicator from "../../Components/ScrollIndicator/ScrollIndicator";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Components/Footer/Footer";

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
        <p>
          A AnimÓCentro é uma empresa de animação turística que visa atender à
          escassez de atividades desta tipologia no Centro de Portugal.
        </p>
        <p>
          Com balcão de atendimento físico na região de Coimbra, esta iniciativa
          pretende diversificar a oferta turística da região Centro, atrair mais
          visitantes, incentivá-los a explorar as riquezas culturais e naturais
          da Entidade Regional em que está inserida.
        </p>
        <p>
          Ao apresentarmos um conjunto diversificado de atividades de animação,
          possibilitamos também um aumento do tempo médio de permanência dos
          turistas na cidade de Coimbra, complementando a sua estadia com
          experiências memoráveis que particularizam o nosso território. Todos
          estes fatores impulsionam significativamente o desenvolvimento
          económico da região de Coimbra, classificando o Centro de Portugal
          como um destino de férias atrativo e vibrante.
        </p>
        <NavLink to="/sobrenos">
          <button className="btn-saber-mais" >
            SABER MAIS
          </button>
        </NavLink>
      </div>
      <Footer/>
    </>
  );
};

export default Homepage;
