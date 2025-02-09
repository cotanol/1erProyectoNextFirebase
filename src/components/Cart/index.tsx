"use client";

import React from "react";
import { Trash, X } from "lucide-react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CartProps {
  onClose: () => void;
}

export const Cart = ({ onClose }: CartProps) => {
  const { countItems, totalAmount, cartItems, setCartItems } =
    useShoppingCart();
  const router = useRouter();

  const onRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    console.log("Remove item with id:", id);
  };

  const handleClick = () => {
    router.push("/checkout");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full">
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {countItems === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100} // Especificar width
                      height={100} // Especificar height
                      className="object-cover rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-gray-900">
                        {item.title}
                      </h3>

                      <p className="text-gray-600">${item.price}</p>
                      <p className="text-gray-600">x{item.quantity}</p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 border-t pt-6">
            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <button
              disabled={countItems === 0}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleClick}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
