import Carrito from './carrito.png'
import './CartWidget.css'

/*
Componente del carrito de compras que muestra un botón para acceder a el 
*/

function CartWidget() {
  return (
    <div id="carrito-componente">
      <a href='#'><img src={Carrito} alt="Logo carrito"/></a>
    </div>
  )
}

export default CartWidget
