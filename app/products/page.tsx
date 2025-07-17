import React from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Premium Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of pure, natural dairy products and organic
              fertilizers, crafted with traditional methods and modern quality
              standards.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every product undergoes rigorous quality checks to ensure you
              receive only the finest dairy products and organic fertilizers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Daily Fresh
              </h3>
              <p className="text-gray-600">
                All products are prepared fresh daily with no preservatives.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Traditional Methods
              </h3>
              <p className="text-gray-600">
                Ancient techniques preserved for authentic taste and quality.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                100% Natural
              </h3>
              <p className="text-gray-600">
                No artificial additives, colors, or chemicals in any product.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
