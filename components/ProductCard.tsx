/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/types/product';
import { cartStore } from '@/store/cartStore';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

    const handleAddToCart = () => {
    cartStore.addItem(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Link href={`/products/${product.slug}`}>
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        </Link>
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
        
        <div className="mb-4">
          <span className="text-2xl font-bold text-orange-600">₹{product.price}</span>
          <span className="text-gray-500 ml-2">per {product.category === 'milk' ? 'litre' : 'kg'}</span>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Benefits:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.benefits.slice(0, 2).map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default observer(ProductCard);