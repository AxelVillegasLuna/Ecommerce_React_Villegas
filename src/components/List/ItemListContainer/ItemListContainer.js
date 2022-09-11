import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../../Data/Data';
import { useParams } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

/*
Componente contenedor que realizada una llamada simulada a una "base de datos" y pasa lo obtenido al componente ItemList
*/

function ItemListContainer() {
  // Declaración de estados
  const [products, setProducts] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);

  // Uso de parámetros de la URL
  const { categoryId } = useParams();

  // Llamada inicial a la base de datos para traer todos los productos o de cierta categoría según el parámetro pasado
  useEffect(() => {
    if(!categoryId){
      getProducts()
      .then(resp => {setProducts(resp)})
      .catch(err => console.log(err))
      .finally(() => setShowSpinner(false))
    } else{
      getProductsByCategory(categoryId)
      .then(resp => {setProducts(resp)})
      .catch(err => console.log(err))
      .finally(() => setShowSpinner(false))
    }
  }, [categoryId]);

  return (
    <main id="containerMain">
      {showSpinner ? <Spinner/> : <ItemList products={products}/>}
    </main>
  )
}

export default ItemListContainer;
