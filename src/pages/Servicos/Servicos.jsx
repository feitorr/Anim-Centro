import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./Servicos.css";
import Header from "../../Components/Header/Header";
import video from "../Homepage/video_background2.mp4";
import ScrollIndicator from "../../Components/ScrollIndicator/ScrollIndicator";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";
import { supabase } from "../../Components/supabaseClient";

const Servicos = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase.from("servicos").select();
      if (error) {
        console.error("Erro ao buscar serviços:", error);
      } else {
        setServices(data);
      }
    };

    fetchServices();
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
            <h1>OS NOSSOS SERVIÇOS</h1>
          </div>
        </div>
      </div>
      <ScrollIndicator />

      <div className="services-container">
        <div className="services-grid">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
              onClick={() => navigate(`/cardinfo/${service.id}`)} // Navega para a página do serviço
            >
              <div className="service-image-wrapper">
                <img src={service.imagem} alt={service.titulo} className="service-image" />
              </div>
              <div className="service-text">
                <h3 className="service-title">{service.titulo}</h3>
                <p className="service-description">{service.primeira_descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Servicos;
