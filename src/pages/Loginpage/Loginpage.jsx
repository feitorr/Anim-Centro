import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2"; 
import { supabase } from "../../Components/supabaseClient";
import "./Loginpage.css";
import video from "../Homepage/video_background2.mp4";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("utilizadores") 
        .select("*")
        .eq("nome", email) 
        .eq("password", password)
        .single(); 

      if (error) {
        throw error; 
      }

      if (data) {
        
        Swal.fire({
          icon: "success",
          title: "Login bem-sucedido",
          text: "redirecionado para o painel de administração!",
          confirmButtonText: "Ok",
        }).then(() => {
          navigate("/admin"); 
        });
      } else {
        // Se não encontrar, exibe erro
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: "Usuário ou senha incorretos.",
          confirmButtonText: "Tentar novamente",
        });
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Houve um erro ao fazer login. Tente novamente.",
        confirmButtonText: "Tentar novamente",
      });
    }
  };

  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="login-panel">
        <h2>LOGIN</h2>
        {error && <p className="error-message">{error}</p>} 
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>USERNAME</label>
            <input
              type="text"
              id="text"
              name="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="submit-login" type="submit">ENTRAR</button>
        </form>
      </div>
    </>
  );
};

export default Loginpage;
