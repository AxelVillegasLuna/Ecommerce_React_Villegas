import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import { collection, doc, updateDoc, increment, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Data/DataFirebase'

const Cart = () => {

  const { cart, removeFromCart, removeAll, getTotal } = useContext(CartContext);
  const createOrder = () => {
    const itemsDB = cart.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price
    }));

    const order = {
      buyer: {
        name: "Axel Villegas Luna",
        phone: "123456789",
        email: "avillegas@react.com"
      },
      items: itemsDB,
      date: serverTimestamp(),
      total: getTotal()
    }
    createrOrderDB(order)
      .then(result => {
        alert(`Compra realizada exitosamente con el ID ${result.id}`);
        cart.forEach(async (item) => {
          const itemRef = doc(db, "products", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.quantity)
          })
        });
        removeAll();})
      .catch(error => console.log(error))
  }

  const createrOrderDB = async (order) => {
    const newOrder = doc(collection(db, "orders"));
    await setDoc(newOrder, order);
    return newOrder
  }
  
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
                  <td><img src={product.img} alt="Imagen del producto"></img></td>
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
            <button onClick={() => createOrder()} className="cartButton" id="buyButton">Realizar compra</button>
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
