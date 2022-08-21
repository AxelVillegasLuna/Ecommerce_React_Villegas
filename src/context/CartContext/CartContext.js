import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const productInCart = cart.find((productInCart) => productInCart.id === id);
    if (productInCart) return true;
    return false;
  };

  const addToCart = (product) => {
    if (isInCart(product.id)) {
      const newCart = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          return {
            ...productInCart,
            quantity: productInCart.quantity + product.quantity,
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

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const removeAll = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

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