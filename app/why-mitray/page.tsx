/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Shield, Heart, Leaf, Award, Users, Clock } from "lucide-react";
import GheeComparisonTable from "@/components/GheeComparisonTable";

const WhyMitray = () => {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-orange-600" />,
      title: "100% Pure & Natural",
      description:
        "Our products contain no artificial additives, preservatives, or chemicals. Everything is sourced directly from our healthy, grass-fed cows.",
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-600" />,
      title: "Traditional Bilona Method",
      description:
        "Our ghee is prepared using the ancient Bilona method, where milk is churned in wooden churns to preserve nutrients and authentic taste.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-orange-600" />,
      title: "Organic & Sustainable",
      description:
        "We follow sustainable farming practices and our organic khatar is made naturally from cow dung without any chemical processing.",
    },
    {
      icon: <Award className="w-12 h-12 text-orange-600" />,
      title: "Quality Guarantee",
      description:
        "Every product undergoes strict quality checks. We guarantee freshness, purity, and nutritional value in every purchase.",
    },
    {
      icon: <Users className="w-12 h-12 text-orange-600" />,
      title: "Family Trust",
      description:
        "Thousands of families trust Mitray for their daily dairy needs. We've built lasting relationships based on quality and authenticity.",
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Fresh Daily",
      description:
        "Our products are prepared fresh every day. From milking to packaging, everything happens within 24 hours for maximum freshness.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-3xl font-bold mb-4">
              Why Choose Mitray?
            </h1>
            <p className="text-xl max-w-xl mx-auto leading-relaxed">
              Discover what makes us different from other dairy providers. Our
              commitment to quality, tradition, and purity sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Ghee Comparison Table */}
      <GheeComparisonTable />


      {/* Main Reasons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilona Method Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The Traditional Bilona Method
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our time-honored Bilona method preserves the authentic taste and
              nutritional value of ghee. Each step is carefully executed using
              traditional techniques passed down through generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src="/bilona1.jpg"
                  alt="Fresh milk collection from cows"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Fresh Milk Collection
                </h3>
                <p className="text-gray-600 text-sm">
                  Pure, fresh milk is collected from our healthy, grass-fed desi
                  cows twice daily - early morning and evening for maximum
                  freshness and quality.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src="bilona2.jpg"
                  alt="Natural curd formation process"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Natural Curd Formation
                </h3>
                <p className="text-gray-600 text-sm">
                  Fresh milk is naturally fermented into curd using traditional
                  starter cultures. No artificial additives are used, allowing
                  natural beneficial bacteria to develop.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src="bilona.jpg"
                  alt="Traditional wooden bilona churning"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Wooden Bilona Churning
                </h3>
                <p className="text-gray-600 text-sm">
                  Curd is hand-churned using traditional wooden bilona (churner)
                  in a rhythmic motion. This ancient technique separates butter
                  naturally while preserving nutrients.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src="bilona3.jpg"
                  alt="Slow heating process for ghee"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Slow Heating Process
                </h3>
                <p className="text-gray-600 text-sm">
                  Fresh butter is slowly heated on low flame until it transforms
                  into golden, aromatic ghee. This gentle process preserves all
                  nutrients and creates the perfect texture.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits of Bilona Method */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Bilona Method is Superior
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-2xl">✓</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Preserves Nutrients
                </h4>
                <p className="text-gray-600 text-sm">
                  Traditional churning preserves vitamins A, D, E, K and
                  beneficial fatty acids.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-2xl">✓</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Authentic Taste
                </h4>
                <p className="text-gray-600 text-sm">
                  Hand-churning creates the rich, authentic flavor that
                  machine-made ghee cannot match.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold text-2xl">✓</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Better Digestion
                </h4>
                <p className="text-gray-600 text-sm">
                  Bilona ghee is easier to digest and has better bioavailability
                  of nutrients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pure Milk Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/cow4.jpg"
                alt="Fresh cow milk"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                100% Clean & Pure Milk
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our milk comes from healthy, grass-fed cows that graze freely in
                our pastures. We maintain the highest standards of hygiene and
                quality throughout the milking process.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">
                    No hormones or antibiotics
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Grass-fed cows only</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Tested for purity daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Rich in natural nutrients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organic Khatar Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Organic Khatar - Natures Gift
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our organic khatar is made naturally from cow dung, providing the
              perfect organic fertilizer for your plants and gardens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                100% Natural
              </h3>
              <p className="text-gray-600">
                Made from pure cow dung without any chemical processing or
                additives.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Soil Enriching
              </h3>
              <p className="text-gray-600">
                Rich in nutrients that naturally improve soil health and plant
                growth.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Eco-Friendly
              </h3>
              <p className="text-gray-600">
                Sustainable and environmentally friendly alternative to chemical
                fertilizers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Mitray Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our family of satisfied customers who have experienced the pure
            taste and quality of our traditional dairy products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Shop Our Products
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyMitray;
