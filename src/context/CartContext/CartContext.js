import { useState, createContext } from 'react';

export const CartContext = createContext();

// Declaración del provider del contexto
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para comprobar si un producto existe en el carrito, tiene un parámetro opcional en caso de que se requiera los datos de dicho producto
  const isInCart = (id, details = false) => {
    const productInCart = cart.find((productInCart) => productInCart.id === id);
    if (details){
      if(productInCart){
        return productInCart.quantity;
      }else{
        return '1';
      }
    } else {
      if (productInCart) return true;
      return false;
    }
  };

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    if (isInCart(product.id)) {
      const newCart = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          return {
            ...productInCart,
            quantity: product.quantity,
          };
        } else {
          return productInCart;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  // Función para quitar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  // Función para limpiar el carrito
  const removeAll = () => {
    setCart([]);
  };

  // Función para obtener el precio total de los productos en el carrito
  const getTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  // Función para obtener la cantidad de productos totales en el carrito
  const getQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeAll, isInCart, getTotal, getQuantity, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;