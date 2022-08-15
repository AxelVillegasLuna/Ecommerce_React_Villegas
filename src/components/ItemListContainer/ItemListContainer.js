import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../Data/Data';
import { useParams } from 'react-router-dom';

/*
Componente contenedor que realizada una llamada simulada a una "base de datos" y pasa lo obtenido al componente ItemList
*/

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if(!categoryId){
      getProducts()
      .then(resp => {setProducts(resp)})
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else{
      getProductsByCategory(categoryId)
      .then(resp => {setProducts(resp)})
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
  }, [categoryId]);

  return (
    <main id="containerMain">
      {loading ? <h2>Cargando...</h2> : <ItemList products={products}/>}
    </main>
  )
}

export default ItemListContainer
