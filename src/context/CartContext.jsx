import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // const [item, setItem] = useState(100);

  return <CartContext.Provider>{children}</CartContext.Provider>;
};
