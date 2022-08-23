import './ItemDetailContainer.css';
import ItemDetail  from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { getProductById } from '../../Data/Data';
import { useParams } from 'react-router-dom';


/*
Componente contenedor que realizada una llamada simulada a una "base de datos" y pasa lo obtenido al componente ItemDetail
*/

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
    .then(resp => setProduct(resp))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [productId]);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemDetail {...product}/>}
    </div>
  )
}

export default ItemDetailContainer
