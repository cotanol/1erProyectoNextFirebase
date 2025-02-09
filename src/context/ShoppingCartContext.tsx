"use client";

import { CartItem } from "@/types/course";
import { useContext, createContext, useState, useEffect } from "react";

interface ShoppingCartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  countItems: number;
  setCountItems: React.Dispatch<React.SetStateAction<number>>;
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
  modalCart: boolean;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType
);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  if (!context)
    throw new Error(
      "useShoppingCart debe estar dentro de ShoppingCartProvider"
    );

  return context;
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [modalCart, setModalCart] = useState(false);
  const [countItems, setCountItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("cartItems");
    if (data) setCartItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    setCountItems(cartItems.reduce((acc, item) => acc + item.quantity, 0));
    setTotalAmount(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        setCartItems,
        countItems,
        setCountItems,
        totalAmount,
        setTotalAmount,
        modalCart,
        setModalCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
