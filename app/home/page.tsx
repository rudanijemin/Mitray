/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Milk,
  Flower,
  Leaf,
  Shield,
  Heart,
  Star,
} from "lucide-react";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      src: "/cow2.jpg",
      alt: "Happy cows at Mitray Cow Shala",
    },
    {
      src: "/cow3.jpg",
      alt: "Fresh milk collection",
    },
    {
      src: "/cow4.jpg",
      alt: "Traditional ghee making",
    },
    {
      src: "/cow5.jpg",
      alt: "Organic farming at Mitray",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const features = [
    {
      icon: <Milk className="w-8 h-8 text-orange-600" />,
      title: "Fresh Cow Milk",
      description: "Pure, fresh milk from our healthy, grass-fed cows daily.",
    },
    {
      icon: <Flower className="w-8 h-8 text-orange-600" />,
      title: "Bilona Ghee",
      description:
        "Traditional Bilona method ghee, prepared with ancient techniques.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-orange-600" />,
      title: "Organic Khatar",
      description: "Premium organic fertilizer made from natural cow dung.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Pure & Natural
                <span className="text-orange-600 block">Dairy Products</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the authenticity of traditional dairy farming with
                our premium cow milk, traditional Bilona ghee, and organic
                khatar. Pure, natural, and made with love at Mitray Cow Shala.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/why-mitray"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Why Choose Us</span>
                </Link>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                className="w-full h-96 object-cover transition-opacity duration-1000"
              />

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex
                        ? "bg-orange-600"
                        : "bg-white bg-opacity-50 hover:bg-opacity-75"
                    }`}
                  />
                ))}
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">
                    100% Natural
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the finest dairy products and organic fertilizers,
              crafted with traditional methods and modern quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/cow2.jpg"
                alt="Traditional dairy farming"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose Mitray?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      100% Pure & Natural
                    </h3>
                    <p className="text-gray-600">
                      No artificial additives or preservatives in our products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Traditional Methods
                    </h3>
                    <p className="text-gray-600">
                      Ancient Bilona method for ghee and traditional dairy
                      practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Organic & Sustainable
                    </h3>
                    <p className="text-gray-600">
                      Environmentally friendly practices and organic products.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/why-mitray"
                className="inline-block mt-8 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16  bg-gradient-to-r from-orange-50 to-orange-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Pure Dairy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Mitray for their
            daily dairy needs.
          </p>
          <Link
            href="/products"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Shop Our Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
