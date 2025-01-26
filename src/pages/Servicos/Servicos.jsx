import React, { useEffect } from "react";
import "./Servicos.css"; 
import Header from "../../Components/Header/Header";
import video from "../Homepage/video_background.mp4";
import ScrollIndicator from "../../Components/ScrollIndicator/ScrollIndicator";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Components/Footer/Footer";

const Servicos = () => {
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
            <h1>AS NOSSAS ATIVIDADES</h1>
          </div>
        </div>
      </div>
      <ScrollIndicator />
      <Footer/>
    </>
  );
};

export default Servicos;
