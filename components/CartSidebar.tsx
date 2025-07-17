/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { cartStore } from "@/store/cartStore";
import { observer } from "mobx-react-lite";
import ThankYouCard from "./ThankYouCard";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {

  const [showThankYou, setShowThankYou] = React.useState(false);

    const updateQuantity = (id: string, quantity: number) => {
    cartStore.updateQuantity(id, quantity);
  };

  const removeItem = (id: string) => {
    cartStore.removeItem(id);
  };

  const clearCart = () => {
    cartStore.clearCart();
  };

  const sendCartToWhatsApp = () => {
    const phoneNumber = "919265571740"; 

    let message = `🛒 *New Order Request*\n\n`;

    cartStore.items.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n`;
      message += `Quantity: ${item.quantity}\n`;
      message += `Price: ₹${item.price}\n`;
      message += `Total: ₹${(item.price * item.quantity).toFixed(2)}\n`;
      message += `Image: ${item.image}\n\n`;
    });

    message += `*Total Amount: ₹${cartStore.total.toFixed(2)}*\n`;
    message += `\nPlease confirm the order. 🙏`;

    console.log("message", message);

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setShowThankYou(true)
    cartStore.clearCart();
};



  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Shopping Cart
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartStore.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-2">
                  Add some products to get started
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartStore?.items.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          ₹{item.price} per{" "}
                          {item.category === "milk" ? "litre" : "kg"}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-4 h-4 text-gray-600" />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="mt-2 text-right">
                          <span className="font-semibold text-orange-600">
                            <span className="font-semibold text-orange-600">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {cartStore.items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="w-full text-red-500 text-sm py-2 hover:bg-red-50 rounded transition-colors"
                  >
                    Clear Cart
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartStore?.items.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">
                    Total Items:
                  </span>
                  <span className="text-lg font-semibold text-gray-800">
                    {cartStore?.itemCount}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">
                    Total Amount:
                  </span>
                  <span className="text-xl font-bold text-orange-600">
                    ₹{cartStore?.total.toFixed(2)}
                  </span>
                </div>
                <button   onClick={sendCartToWhatsApp}
                   className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold">
                  Proceed to Checkout
                </button>
                <button
                  onClick={onClose}
                  className="w-full border-2 border-orange-600 text-orange-600 py-3 px-4 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200 font-semibold"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
        {showThankYou && <ThankYouCard onClose={() => {
          setShowThankYou(false);
          onClose();
}} />}

      </div>
    </>
  );
};

export default observer(CartSidebar);
