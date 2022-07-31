import './ItemList.css';
import Item from '../Item/Item';

/*
Componente contenedor de los productos del e-commerce
*/

const ItemList = (props) => {
  return (
    <div id="itemList">
      {
        props.data.map(prod => 
          <Item key={prod.id} title={prod.title} desc={prod.desc} img={prod.img} stock={prod.stock} />
        )
      }
    </div>
  )
}

export default ItemList;
