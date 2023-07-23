import React, { createContext, useState, useContext } from "react";

const INITIAL_STATE = {
  cart: [], // Listed Products
};
const CartContext = createContext(INITIAL_STATE);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    // Cleanup localstorage if cart was empty
    if (cart.length === 0) {
      localStorage.removeItem("cart");
    }

    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
    return { msg: "Item Added Successfully", status: 1 };
  };

  const removeItemFromCart = (id) => {
    setCart([...cart.filter((item) => item.id !== id)]);
    return { msg: "Item Removed Successfully", status: 1 };
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ addItemToCart, removeItemFromCart, clearCart, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default CartProvider;
