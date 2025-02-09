"use client";
import { Cart } from "./index";
import { useShoppingCart } from "@/context/ShoppingCartContext";

const CartTrigger = () => {
  const { modalCart, setModalCart } = useShoppingCart();

  return <>{modalCart && <Cart onClose={() => setModalCart(false)} />}</>;
};

export default CartTrigger;
