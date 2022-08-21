import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext/CartContext';
import {Link} from 'react-router-dom';

const Cart = () => {

  const { cart, removeFromCart, removeAll, getTotal } = useContext(CartContext);
  
  return(
    <div id="cartDiv">
      <div id="cartTable">
      {
        cart.length > 0 ?
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
              cart.map((product) => (
                <tr>
                  <td><img src={product.img}></img></td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td><button onClick={() => removeFromCart(product.id)}>Eliminar</button></td>
                </tr>
              ))
              }
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><b>TOTAL</b></td>
                <td>{getTotal()}</td>
              </tr>
            </tbody>
          </table>
          <div id="cartButtons">
            <button onClick={() => removeAll()} className="cartButton" id="cleanCart">Limpiar carrito</button>
            <button className="cartButton" id="buyButton">Realizar compra</button>
          </div> 
        </div>
        : <div id="emptyCart">
            <h2>No hay productos en el carrito</h2>
            <Link to='/'><button>Volver al inicio</button></Link>
          </div>
      }
      </div>
      
    </div>
  )
}

export default Cart
