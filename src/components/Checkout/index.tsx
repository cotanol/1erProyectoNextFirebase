"use client";

// import React, { useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export const Checkout = () => {
  const { cartItems } = useShoppingCart();
  const router = useRouter();
  /*
  const [formData, setFormData] = useState({
    email: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    country: "",
    postalCode: "",
  });
  */

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //TODO: Handle payment processing
    // console.log("Processing payment:", formData);
    //TODO: Clear cart and redirect to success page
    router.push("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <button
            onClick={() => router.push("/courses")}
            className="text-blue-600 hover:text-blue-800"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Payment Details
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center mb-4">
                      <CreditCard className="w-6 h-6 text-blue-500 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Card Information
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVC
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center mb-4">
                      <Lock className="w-6 h-6 text-blue-500 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Billing Address
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                  >
                    Complete Purchase
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-96">
              <div className="bg-white rounded-lg shadow-lg p-8 sticky top-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Order Summary
                </h3>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
