import React, { useEffect } from "react";
import "./Sobre_Nos.css"; 
import Header from "../../Components/Header/Header";
import video from "../Homepage/video_background2.mp4";
import ScrollIndicator from "../../Components/ScrollIndicator/ScrollIndicator";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Components/Footer/Footer";

const SobreNos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
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
            <h1>SOBRE NÓS</h1>
          </div>
        </div>
      </div>
      <ScrollIndicator />
      <div className="sobre-nos-container">
        <h1 data-aos="fade-up">SOBRE A ANIMÓCENTRO</h1>
        <p data-aos="fade-up">
          A AnimÓCentro é uma empresa de animação turística que visa atender à escassez de atividades desta tipologia no Centro de Portugal.
        </p>
        <p data-aos="fade-up">
          Com balcão de atendimento físico na região de Coimbra, esta iniciativa pretende diversificar a oferta turística da região Centro, atrair mais visitantes, incentivá-los a explorar as riquezas culturais e naturais da Entidade Regional em que está inserida.
        </p>
        <p data-aos="fade-up">
          Ao apresentarmos um conjunto diversificado de atividades de animação, possibilitamos também um aumento do tempo médio de permanência dos turistas na cidade de Coimbra, complementando a sua estadia com experiências memoráveis que particularizam o nosso território. Todos estes fatores impulsionam significativamente o desenvolvimento económico da região de Coimbra, classificando o Centro de Portugal como um destino de férias atrativo e vibrante.
        </p>
        <h2 data-aos="fade-up">MISSÃO</h2>
        <p data-aos="fade-up">
          A nossa missão é promover e enriquecer a experiência turística no Centro de Portugal, através da criação e oferta de atividades culturais e de animação que destacam as tradições e a história da região.
        </p>
        <p data-aos="fade-up">
          Buscamos proporcionar aos nossos visitantes momentos inesquecíveis, imersos em vivências autênticas que revelam a essência da cultura local, ao mesmo tempo que incentivamos a valorização do património e da identidade da região.
        </p>
        <p data-aos="fade-up">
          Queremos, com isso, contribuir para o crescimento económico da região, ao mesmo tempo que oferecemos aos turistas uma oportunidade única de explorar e conectar-se com as riquezas culturais, naturais e históricas de Coimbra e do Centro de Portugal.
        </p>
        <h2 data-aos="fade-up">OS NOSSOS VALORES</h2>
        <ul>
          <li data-aos="fade-up">- Compromisso com a qualidade dos serviços</li>
          <li data-aos="fade-up">- Promoção da cultura e tradições locais</li>
          <li data-aos="fade-up">- Inovação e criatividade em nossas atividades</li>
          <li data-aos="fade-up">- Sustentabilidade e respeito pelo meio ambiente</li>
        </ul>
      </div>
      <Footer/>
    </>
  );
};

export default SobreNos;
