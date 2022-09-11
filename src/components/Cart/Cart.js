import './Cart.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import { collection, doc, updateDoc, increment, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Data/DataFirebase';
import {Formik, Form, Field, ErrorMessage} from 'formik';

/* 
Componente del carrito de compras donde se puede realizar la baja o compra de los productos seleccionados
*/

const Cart = () => {
  // Uso del contexto
  const { cart, removeFromCart, removeAll, getTotal } = useContext(CartContext);

  // Declaración de estados
  const [showSpinner, setShowSpinner] = useState(false);
  const [showId, setShowId] = useState(false);
  const [idCompra, setIdCompra] = useState('');

  // Función para crear la orden en la base de datos de Firebase
  const createOrder = (p_name, p_email, p_phone) => {
    const itemsDB = cart.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price
    }));

    const order = {
      buyer: {
        name: p_name,
        phone: p_email,
        email: p_phone
      },
      items: itemsDB,
      date: serverTimestamp(),
      total: getTotal()
    };

    createrOrderDB(order)
      .then(result => {
        setShowSpinner(false);
        setIdCompra(result.id);
        setShowId(true);
        cart.forEach(async (item) => {
          const itemRef = doc(db, "products", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.quantity)
          })
        });
        removeAll();})
      .catch(error => console.log(error));
  }

  const createrOrderDB = async (order) => {
    const newOrder = doc(collection(db, "orders"));
    await setDoc(newOrder, order);
    return newOrder;
  }
  
  return(
    <div id="cartDiv">
      {
        // Verificamos si el estado del spinner es verdadero para renderizarlo
        showSpinner ? <div id='divSpinner'><Spinner/></div> :
        // En caso de que no se deba mostrar el spinner, verificamos si el carrito contiene productos. En caso de que sea V entonces renderizamos la tabla y el formulario
        cart.length > 0 ?
          <div  id="cartTable">
            <div id="table">
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
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="divForm">
              <div id="block">
                <h2 id="totalText">TOTAL : ${getTotal()}</h2>
              </div>
              <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: ''
                }}
                validate={(values) => {
                    let o_errors = {};

                    // Validación para el nombre
                    if(!values.name){
                        o_errors.name = 'Por favor ingresa un nombre';
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                        o_errors.name = 'El nombre solo puede contener letras y espacios';
                    }

                    // Validación para el email
                    if(!values.email){
                        o_errors.email = 'Por favor ingresa un correo electrónico';
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                        o_errors.email = 'El email solo puede contener letras, números, puntos, guiones y guion bajo';
                    }

                    // Validación para el teléfono
                    if(!values.phone){
                        o_errors.phone = 'Por favor ingresa un teléfono';
                    } else if(!/^[0-9]{1,9}(\.[0-9]{0,2})?$/.test(values.phone)){
                        o_errors.phone = 'El teléfono solo puede contener números';
                    } else if(values.phone.length <= 6){
                      o_errors.phone = 'El teléfono tiene que tener más de 6 dígitos';
                    }

                    return o_errors;
                }}
                onSubmit={( values, {resetForm} ) => {
                  resetForm();
                  setShowSpinner(true);
                  createOrder(values.name, values.email, values.phone);
                }}
              >
                {( { errors } ) => (
                    <Form className='formulario'>
                        <div>
                            <label htmlFor='name'>Nombre completo</label>
                            <Field
                            type='text' 
                            id='name' 
                            name='name' 
                            placeholder='Ingrese su nombre completo' 
                            />
                            <ErrorMessage name='name' component={() => (
                                <div className='error'>{errors.name}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor='email'>Correo</label>
                            <Field 
                                type='email' 
                                id='email' 
                                name='email' 
                                placeholder='Ingrese su correo electrónico' 
                            />
                            <ErrorMessage name='email' component={() => (
                                <div className='error'>{errors.email}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor='phone'>Teléfono</label>
                            <Field 
                                type='text' 
                                id='phone' 
                                name='phone' 
                                placeholder='Ingrese su teléfono' 
                            />
                            <ErrorMessage name='phone' component={() => (
                                <div className='error'>{errors.phone}</div>
                            )}/>
                        </div>
                        <button type='submit'>Realizar compra</button>
                        <button onClick={() => removeAll()} className="cartButton" id="cleanCart">Limpiar carrito</button>
                    </Form>
                )}
              </Formik>
            </div>
          </div>
        : // En caso de que el carrito no tenga productos, verificamos si se debe a que una compra se realizó o si se quitaron todos los productos
          <>
            {showId ? 
              <div id="emptyCartContainer">
                <div id="emptyCart">
                  <h2>Compra realizada con el ID: {idCompra}</h2>
                  <p>Muchas gracias por confiar en nosotros!</p>
                  <Link to='/'><button>Volver al inicio</button></Link>
                </div>
              </div>
            :
            <div id="emptyCartContainer">
              <div id="emptyCart">
                <h2>No hay productos en el carrito</h2>
                <Link to='/'><button>Volver al inicio</button></Link>
              </div>
            </div>
            }
          </> 
      }
    </div>
  )
}

export default Cart;
