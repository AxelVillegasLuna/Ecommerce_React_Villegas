import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

/*
Componente contenedor que recibe una serie de props para ser mostradas en el mismo. En un futuro será el contenedor
de nuestros articulos
*/

function ItemListContainer(props) {
  return (
    <main id="contenedor_principal">
      <p>{props.greeting}</p>
      <ItemCount stock="5" initial="1"></ItemCount>
    </main>
  )
}

export default ItemListContainer
