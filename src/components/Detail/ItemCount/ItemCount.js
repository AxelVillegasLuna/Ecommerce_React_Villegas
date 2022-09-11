import './ItemCount.css';
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

/*
Componente del contador utilizado para elegir la cantidad de cada uno de los productos de acuerdo a su stock
*/

const ItemCount = (props) => {
    // Seteo de variables
    const stock = parseInt(props.stock);
    const initial = parseInt(props.initial);
    const onAddItems = props.onAddItems;

    // Declaración de estados
    const [count, setCount] = useState(initial);
    
    // Función para aumentar contador
    const addCount = () => {
        if(stock == 0){
            alert("No hay stock disponible");
        }else if(count < stock){
            setCount(count + 1);
        }else{
            alert("No puedes superar el límite de stock");
        }
    }
    
    // Función para disminuir contador
    const subtractCount = () => {
        if(stock == 0){
            alert("No hay stock disponible");
        }else if(count > 1){
            setCount(count - 1);
        }else{
            alert(`No puedes elegir menos de un producto/s`);
        }
    }

    // Función para añadir productos al carrito
    const onAdd = () => {
        onAddItems(props.id, props.title, props.desc, props.img, props.price, count);
    }

    return (
        <div >
            <div id="count">
                <button className="btn_count" onClick={subtractCount}><BiMinus color='black' size="11px"/></button>
                    <p>{count}</p>
                <button className="btn_count" onClick={addCount}><BiPlus color='black' size="11px"/></button>
            </div>
            <div id="addCart">
                <button id="addCartBtn" onClick={onAdd}>Agregar al carrito</button>
            </div>  
        </div>
    )
}

export default ItemCount;
