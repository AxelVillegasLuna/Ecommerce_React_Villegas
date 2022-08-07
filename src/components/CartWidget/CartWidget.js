import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css';
import { Link } from 'react-router-dom';

/*
Componente del carrito de compras que muestra un botón para acceder a el 
*/

function CartWidget() {
  return (
    <div id="componentCart">
      <Link to='/'><BsFillCartFill color="black" size="24px"/></Link>
    </div>
  )
}

export default CartWidget
