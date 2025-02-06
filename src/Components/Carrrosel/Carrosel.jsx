import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { supabase } from "../../Components/supabaseClient";
import "./Carrosel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carrosel = () => {
  const [services, setServices] = useState([]);

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
    <div className="carrosel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card2">
              <div className="service-image-wrapper2">
                <img src={service.imagem} alt={service.titulo} className="service-image" />
              </div>
              <div className="service-text2">
                <h3 className="service-title2">{service.titulo}</h3>
                <p className="service-description2">{service.primeira_descricao}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrosel;