import './NavBar.css';
import Logo from './logo.svg'

function NavBar() {
  return (
    <header id="header">
      <div id="logo">
        <img src={Logo} alt='Logo'/>
        <h1><a href='index.html'>ProyectoEcommerce</a></h1>
      </div>
      <ul id="lista">
        <li><a href='#'>Más vendidos</a></li>
        <li><a href='#'>Ofertas</a></li>
        <li><a href='#'>Novedades</a></li>
      </ul>
      <div id="carrito">

      </div>
    </header>
  )
}

export default NavBar
