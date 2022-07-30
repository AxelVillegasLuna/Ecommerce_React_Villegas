import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import Logo from './logo.svg'

/* 
Componente de la barra de navegación donde tenemos el logo/nombre de la página, botones para ir a otras secciones y
utilizamos el componente CartWidget para tener acceso al carrito
*/


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
      <div id="div_carrito">
        <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar
