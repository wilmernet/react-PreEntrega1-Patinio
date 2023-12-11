import "./Header.css"
import logo from "../../assets/logo.png";

const Header = () => {
  return (

    <div id="Header">
        <img src= {logo} alt="Logo Tienda de Mascotas" />        
        <div id="direccion">- Florecia - Caquetá CO. -</div>
    </div>
    
  )
}

export default Header;