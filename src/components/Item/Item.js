import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

/*
Componente que muestra los datos de cada producto
*/

const Item = (props) => {
  return (
    <article className="product">
      <img src={props.img} alt='Imagen de producto' className="imgProduct"></img>
      <h2><a href='#' className="titleProduct">{props.title}</a></h2>
      <p className='descProduct'>{props.desc}</p>
      <ItemCount stock={props.stock} initial="1"/>
    </article>
  )
}

export default Item;
