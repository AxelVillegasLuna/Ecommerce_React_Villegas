import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import getProducts from '../../Data/Data.js';

/*
Componente contenedor que realizada una llamada simulada a una "base de datos" y pasa lo obtenido al componente ItemList
*/

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts
      .then(resp => {setData(resp)})
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, []);

  return (
    <main id="containerMain">
      <p id="greeting">{props.greeting}</p>
      {loading ? <h2>Cargando...</h2> : <ItemList data={data}/>}
    </main>
  )
}

export default ItemListContainer
