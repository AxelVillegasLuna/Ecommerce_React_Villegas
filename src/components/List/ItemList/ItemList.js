import './ItemList.css';
import Item from '../Item/Item';

/*
Componente contenedor de los productos del e-commerce
*/

const ItemList = (props) => {
  return (
    <div id="itemList">
      {
        props.products.map(prod => 
          <Item key={prod.id} {...prod} />
        )
      }
    </div>
  )
}

export default ItemList;
