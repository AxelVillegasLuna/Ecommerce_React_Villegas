import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

/*
Componente que muestra los datos de un producto en particular
*/

function ItemDetail( {title, description, img, price, stock} ) {
  return (
    <div id="productDetail">
      <h2 className='titleDetail'>{title}</h2>
      <img src={img} alt="Imagen del producto" className='imgDetail'></img>
      <p className='descDetail'>{description}</p>
      <p className='priceDetail'>${price}</p>
      <ItemCount stock={stock} initial="1"/>
    </div>
  )
}

export default ItemDetail

