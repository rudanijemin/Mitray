/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

interface ThankYouCardProps {
  onClose: () => void;
}

const ThankYouCard = ({ onClose }: ThankYouCardProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 bg-white bg-opacity-90">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-sm w-full text-center">
        <img
          src="/thankyou.svg"
          alt="Thank You"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h2>
        <p className="text-gray-700 mb-6">
          Your order has been sent via WhatsApp. We&#39;ll be in touch soon!
        </p>
        <button
          onClick={onClose}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouCard;
