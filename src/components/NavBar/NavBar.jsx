import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav className="NavBar">
        <ul>
            <li><a href="#" className="button special">Home</a></li>
            <li><a href="#" id="contactoButton" className="button">Contacto</a></li>
            <li><a href="#" id="galeriaButton" className="button">Galería</a></li>            
        </ul>
        <div id="cartWidget">
           <CartWidget/>
        </div>
    </nav>
  )
}

export default NavBar;