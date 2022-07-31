import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css'

/*
Componente del carrito de compras que muestra un botón para acceder a el 
*/

function CartWidget() {
  return (
    <div id="componentCart">
      <a href='#'><BsFillCartFill color="black" size="24px"/></a>
    </div>
  )
}

export default CartWidget
