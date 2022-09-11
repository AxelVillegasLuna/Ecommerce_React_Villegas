import './ItemDetailContainer.css';
import ItemDetail  from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { getProductById } from '../../../Data/Data';
import { useParams } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';


/*
Componente contenedor que realizada una llamada simulada a una "base de datos" y pasa lo obtenido al componente ItemDetail
*/

const ItemDetailContainer = () => {
  // Declaración de estados
  const [product, setProduct] = useState();
  const [showSpinner, setShowSpinner] = useState(true);

  // Uso de parámetros de la URL
  const { productId } = useParams();

  // Llamada inicial a la base de datos para traer los datos del producto
  useEffect(() => {
    getProductById(productId)
    .then(resp => setProduct(resp))
    .catch(err => console.log(err))
    .finally(() => setShowSpinner(false))
  }, [productId]);

  return (
    <div>
      {showSpinner ? <Spinner/> : <ItemDetail {...product}/>}
    </div>
  )
}

export default ItemDetailContainer;
