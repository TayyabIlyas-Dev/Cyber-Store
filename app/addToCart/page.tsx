"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // Adjust path if necessary

const AddToCartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash className="text-lg" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mt-6 p-4 border-t">
            <div className="flex justify-between text-lg font-medium text-gray-800">
              <p>Total Amount:</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
          </div>
        )}

        {/* Checkout Button */}
        {cartItems.length > 0 && (
          <div className="mt-6">
            <button className="w-full bg-black text-white py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCartPage;
