import './Item.css';
import { Link } from 'react-router-dom';

/*
Componente que muestra los datos de cada producto
*/

const Item = ({ id, img, title, price }) => {
  return (
    <article className="product">
      <picture className='divImg'>
        <img src={img} alt='Imagen de producto' className="imgProduct"></img>
      </picture>
      <h2><a href='#' className="titleProduct">{title}</a></h2>
      <p className='priceProduct'>${price}</p>
      <Link to={`/item/${id}`}><button className="btnDetails">Ver detalles</button></Link>
    </article>
  )
}

export default Item;
