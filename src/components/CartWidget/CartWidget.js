import Carrito from './carrito.png'
import './CartWidget.css'

function CartWidget() {
  return (
    <div id="carrito-componente">
      <a href='#'><img src={Carrito} alt="Logo carrito"/></a>
    </div>
  )
}

export default CartWidget
