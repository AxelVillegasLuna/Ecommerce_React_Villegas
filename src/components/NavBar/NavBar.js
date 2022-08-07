import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import Logo from './logo.svg'
import { Link } from 'react-router-dom';

/* 
Componente de la barra de navegación donde tenemos el logo/nombre de la página, botones para ir a otras secciones y
utilizamos el componente CartWidget para tener acceso al carrito
*/


function NavBar() {
  return (
    <header id="header">
      <div id="logo">
        <img src={Logo} alt='Logo'/>
        <h1><Link to='/'>ProyectoEcommerce</Link></h1>
      </div>
      <ul id="listHeader">
        <li><Link to='/category/notebook'>Notebooks</Link></li>
        <li><Link to='category/smartwatch'>Smartwatchs</Link></li>
        <li><Link to='category/tablet'>Tablets</Link></li>
      </ul>
      <div id="divCart">
        <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar
