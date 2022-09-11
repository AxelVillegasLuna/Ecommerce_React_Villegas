import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext/CartContext';

/*
Componente del carrito de compras que muestra un botón para acceder a él
*/

function CartWidget() {
  // Uso del contexto
  const { cart, getQuantity } = useContext(CartContext);

  return (
    <>
    {cart.length > 0 ? // Verificamos si el carrito tiene productos para mostrar el botón
      <div id="componentCart">
        <Link to='/cart'><span><BsFillCartFill color="black" size="24px"/></span></Link>
        <p>{getQuantity()}</p>
      </div>
      : false
    }
    </>
  )
}

export default CartWidget;
