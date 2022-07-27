import './ItemListContainer.css'

/*
Componente contenedor que recibe una serie de props para ser mostradas en el mismo. En un futuro será el contenedor
de nuestros articulos
*/

function ItemListContainer(props) {
  return (
    <div id="contenedor_principal">
      <p>{props.greeting}</p>
    </div>
  )
}

export default ItemListContainer
