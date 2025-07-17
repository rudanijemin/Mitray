import React from "react";

const GheeComparisonTable = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mitray A2 Ghee vs Other Brands
          </h2>
          <p className="text-lg text-gray-600">
            See why Mitray's A2 Bilona Ghee stands apart in purity, process, and nutrition.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg shadow-md bg-white">
            <thead>
              <tr className="bg-orange-100 text-left text-gray-800">
                <th className="px-6 py-4 font-semibold text-sm sm:text-base">Feature</th>
                <th className="px-6 py-4 font-semibold text-sm sm:text-base text-center">Mitray A2 Bilona Ghee</th>
                <th className="px-6 py-4 font-semibold text-sm sm:text-base text-center">Other Ghee Brands</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Milk Source</td>
                <td className="px-6 py-4 text-green-600 font-medium text-center">A2 Desi Cow Milk</td>
                <td className="px-6 py-4 text-red-500 font-medium text-center">Mixed or A1 Milk</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-6 py-4 text-gray-700">Ghee Preparation</td>
                <td className="px-6 py-4 text-green-600 font-medium text-center">Traditional Bilona Method</td>
                <td className="px-6 py-4 text-red-500 font-medium text-center">Machine Made</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Purity</td>
                <td className="px-6 py-4 text-green-600 font-medium text-center">100% Pure & Natural</td>
                <td className="px-6 py-4 text-red-500 font-medium text-center">Often Contains Preservatives</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-6 py-4 text-gray-700">Churning Process</td>
                <td className="px-6 py-4 text-green-600 font-medium text-center">Hand-Churned with Wooden Bilona</td>
                <td className="px-6 py-4 text-red-500 font-medium text-center">No Churning / Industrial Methods</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Digestibility</td>
                <td className="px-6 py-4 text-green-600 font-medium text-center">Easy to Digest, Rich in Nutrients</td>
                <td className="px-6 py-4 text-red-500 font-medium text-center">Heavily Processed, Less Nutritious</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-gray-700">Packaging</td>
                <td className="px-6 py-4 text-green-600 font-medium text-center">Eco-Friendly Glass Bottles</td>
                <td className="px-6 py-4 text-red-500 font-medium text-center">Plastic or Non-Biodegradable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GheeComparisonTable;
