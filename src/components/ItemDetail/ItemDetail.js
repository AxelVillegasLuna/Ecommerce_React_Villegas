import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';

/*
Componente que muestra los datos de un producto en particular
*/

function ItemDetail( {id, title, description, img, price, stock} ) {
  const [productCart, setProductCart] = useState(0);
  const [showButton, setShowButton] = useState(false)
  const { addToCart } = useContext(CartContext);

  const onAdd = (id, title, description, img, price, quantity) => {
    setProductCart(quantity);
    const product = {id: id, title: title, description: description, img: img, price: price, quantity: quantity};
    addToCart(product);
    setShowButton(true);
  }

  return (
    <div id="productDetail">
      <h2 className='titleDetail'>{title}</h2>
      <img src={img} alt="Imagen del producto" className='imgDetail'></img>
      <p className='descDetail'>{description}</p>
      <p className='priceDetail'>${price}</p> 
      {showButton ? 
      <div id="divButtonHide">
        <p>Se agregaron {productCart} producto/s</p>
        <Link to={`/cart`}><button>Ir al carrito</button></Link>
      </div>
      : <ItemCount id={id} title={title} price={price} desc={description} img={img} onAddItems={onAdd} stock={stock} initial="1"/>}
    </div>
  )
}

export default ItemDetail

