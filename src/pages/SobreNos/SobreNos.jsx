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
        <h2 data-aos="fade-up">MISSÃO</h2>
        <p data-aos="fade-up">
        A nossa missão é promover e valorizar a rica cultura e as tradições do Centro de Portugal, oferecendo aos turistas uma experiência única e autêntica. Através de um vasto leque de atividades e percursos, trabalhamos para atrair mais visitantes à região, criando memórias inesquecíveis e proporcionando uma imersão profunda nas belezas e histórias que tornam esta parte do país especial.
        </p>
        <h2 data-aos="fade-up">VISÃO</h2>
        <p data-aos="fade-up">
        Queremos ser a ponte entre os turistas e as diversas experiências que o Centro de Portugal tem para oferecer. A nossa visão é complementar a estadia dos visitantes com atividades envolventes e educativas, permitindo-lhes descobrir e vivenciar as tradições, a gastronomia, a arte e o património local. Buscamos proporcionar momentos que transformem a visita numa experiência única.
        </p>
        <h2 data-aos="fade-up">VALORES</h2>
        <p data-aos="fade-up">
        A nossa equipa é movida por princípios fundamentais que orientam cada atividade e experiência que oferecemos:
        </p>
<div className="valores-container">
  <div className="valor-card" data-aos="fade-up">
    <h3>DEDICAÇÃO</h3>
    <p>Comprometemo-nos a oferecer o melhor aos nossos clientes, com um atendimento personalizado e atenção constante aos detalhes.</p>
  </div>
  <div className="valor-card" data-aos="fade-up">
    <h3>CRIATIVIDADE</h3>
    <p>Cada experiência é pensada de forma única, criando momentos inovadores que surpreendem e encantam os turistas, aproximando-os da essência da nossa região.</p>
  </div>
  <div className="valor-card" data-aos="fade-up">
    <h3>INOVAÇÃO</h3>
    <p>Estamos sempre à procura de novas formas de mostrar o melhor do Centro de Portugal, desenvolvendo atividades e propostas que acompanham as tendências e as necessidades do mercado turístico.</p>
  </div>
  <div className="valor-card" data-aos="fade-up">
    <h3>ESPÍRITO DE EQUIPA</h3>
    <p>Acreditamos que o sucesso vem do trabalho conjunto, onde cada membro da nossa equipa contribui com a sua experiência e paixão para criar experiências excecionais para os nossos visitantes.</p>
  </div>
</div>
<p data-aos="fade-up">
Com estes valores, procuramos transformar a forma como os turistas vivenciam o Centro de Portugal, criando um ambiente acolhedor e inovador para todos.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default SobreNos;
