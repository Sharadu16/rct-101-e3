import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [item, setItem] = useState(100);

  return <CartContext.Provider value={{item}}>{children}</CartContext.Provider>;
};
