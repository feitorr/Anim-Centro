import logo from "../Header/logo2.png";
import "./Sidebar_admin.css";
import { Link } from "react-router-dom";
const Sidebar_admin = () => {
  return (
    <>
      <div className="container_admin">
        <Link to="/">
          <img src={logo}  />
        </Link>
        <div className="btn">
          <div className="botoes">
            <Link to="/crudS">
              <button>SERVICOS</button>
            </Link>
          </div>
          <div className="botoes">
          <Link to="/crudU">
              <button>UTILIZADORES</button>
            </Link>
          </div>
          <div className="botoes">
          <Link to="/vendidos">
            <button>SOBRE NÓS</button>
            </Link>
          </div>
          <div className="botoes">
            <button>Clientes</button>
          </div>
        </div>
         <div className="icon_side">
          </div>
      </div>    
    </>
  );
};

export default Sidebar_admin;
