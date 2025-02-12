import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams para pegar o ID da URL
import "./Cardpage.css";
import Header from "../../Components/Header/Header";
import video from "../Homepage/video_background2.mp4";
import ScrollIndicator from "../../Components/ScrollIndicator/ScrollIndicator";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Components/Footer/Footer";
import { supabase } from "../../Components/supabaseClient"; 

const Cardpage = () => {
  const { id } = useParams(); // Obtém o ID do serviço da URL
  const [service, setService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchService = async () => {
      const { data, error } = await supabase
        .from("servicos")
        .select()
        .eq("id", id)
        .single(); // Busca o serviço pelo ID

      if (error) {
        console.error("Erro ao buscar detalhes do serviço:", error);
      } else {
        setService(data);
        console.log(data)
      }
    };

    fetchService();
  }, [id]);

  if (!service) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <div className="homepage-container">
        <Header />
        <div className="video-background">
          <video autoPlay loop muted className="video">
            <source src={video} type="video/mp4" />
          </video>
          <div className="welcome-text">
            <h1>{service.titulo}</h1> 
          </div>
        </div>
      </div>
      <ScrollIndicator />

      <div className="service-details">
  <img 
    src={service.imagem} 
    alt={service.titulo} 
    className="service-detail-image"
    data-aos="fade-right" // Aparece deslizando da direita
  />
<p className="description" data-aos="fade-up" data-aos-duration="1500">
  {service.descricao.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))}
</p>
</div>
 
      <Footer />
    </>
  );
};

export default Cardpage;
