import React from "react";
import "./Sobre_Nos.css"; 
import Header from "../../Components/Header/Header";
import video from "../Homepage/video_background.mp4";
import ScrollIndicator from "../../Components/ScrollIndicator/ScrollIndicator";

const SobreNos = () => {
  return (
    <>
      <div className="homepage-container">
        <Header />
        <div className="video-background">
          <video autoPlay loop muted className="video">
            <source src={video} type="video/mp4" />
          </video>
          <div className="welcome-text">
            <h1>SOBRE A ANIMÓCENTRO</h1>
          </div>
        </div>
      </div>
      <ScrollIndicator /> 
      <div className="sobre-nos-container">
        <h1>SOBRE NÓS</h1>
        <p>
          A AnimÓCentro é uma empresa de animação turística que visa atender à escassez de atividades desta tipologia no Centro de Portugal.
        </p>
        <p>
          Com balcão de atendimento físico na região de Coimbra, esta iniciativa pretende diversificar a oferta turística da região Centro, atrair mais visitantes, incentivá-los a explorar as riquezas culturais e naturais da Entidade Regional em que está inserida.
        </p>
        <p>
          Ao apresentarmos um conjunto diversificado de atividades de animação, possibilitamos também um aumento do tempo médio de permanência dos turistas na cidade de Coimbra, complementando a sua estadia com experiências memoráveis que particularizam o nosso território. Todos estes fatores impulsionam significativamente o desenvolvimento económico da região de Coimbra, classificando o Centro de Portugal como um destino de férias atrativo e vibrante.
        </p>
        <h2>MISSÃO</h2>
        <p>
          A nossa missão é promover e enriquecer a experiência turística no Centro de Portugal, através da criação e oferta de atividades culturais e de animação que destacam as tradições e a história da região.
        </p>
        <p>
          Buscamos proporcionar aos nossos visitantes momentos inesquecíveis, imersos em vivências autênticas que revelam a essência da cultura local, ao mesmo tempo que incentivamos a valorização do património e da identidade da região.
        </p>
        <p>
          Queremos, com isso, contribuir para o crescimento económico da região, ao mesmo tempo que oferecemos aos turistas uma oportunidade única de explorar e conectar-se com as riquezas culturais, naturais e históricas de Coimbra e do Centro de Portugal.
        </p>
        <h2>OS NOSSOS VALORES</h2>
        <ul>
          <li>- Compromisso com a qualidade dos serviços</li>
          <li>- Promoção da cultura e tradições locais</li>
          <li>- Inovação e criatividade em nossas atividades</li>
          <li>- Sustentabilidade e respeito pelo meio ambiente</li>
        </ul>

        <h2>REDES SOCIAIS</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SL2Gf-U_ixigPGDa-r4JQwHaHa%26pid%3DApi&f=1&ipt=61b842dcbc96b38fda1f35f9e6ed6af46e80212e523f8e9430ac0be2b264967e&ipo=images" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SobreNos;
