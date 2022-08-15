import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';

const Cart = () => {

  const { cart, removeFromCart, removeAll } = useContext(CartContext);
  
  return(
    <div>
      {
      cart.map((product) => (
        <div>
          <h2>Producto: {product.title}</h2>
          <p>Precio: {product.price}</p>
          <p>Cantidad: {product.quantity}</p>
          <button onClick={() => removeFromCart(product.id)}>Borrar producto</button>
        </div>
      ))}
      <button onClick={() => removeAll()}>Limpiar carrito</button>
    </div>
  )
}

export default Cart
