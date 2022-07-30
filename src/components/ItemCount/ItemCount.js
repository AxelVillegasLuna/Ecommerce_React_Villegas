import './ItemCount.css';
import { useState } from "react"
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

const ItemCount = (props) => {
    const stock = parseInt(props.stock);
    const initial = parseInt(props.initial);

    const [count, setCount] = useState(initial);
    
    const addCount = () => {
        if(stock == 0){
            alert("No hay stock disponible");
        }else if(count < stock){
            setCount(count + 1);
        }else{
            alert("No puedes superar el límite de stock");
        }
    }
    
    const subtractCount = () => {
        if(stock == 0){
            alert("No hay stock disponible");
        }else if(count > initial){
            setCount(count - 1);
        }else{
            alert(`No puedes elegir menos de ${initial} producto/s`);
        }
    }

    return (
        <div >
            <div id="count">
                <button className="btn_count" onClick={subtractCount}><BiMinus color='black' size="11px"/></button>
                    <p>{count}</p>
                <button className="btn_count" onClick={addCount}><BiPlus color='black' size="11px"/></button>
            </div>
            <div id="addCart">
                <button id="addCartBtn">Agregar al carrito</button>
            </div>  
        </div>
    )
}

export default ItemCount
