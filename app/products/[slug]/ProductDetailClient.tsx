/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { cartStore } from '@/store/cartStore';
import { observer } from 'mobx-react-lite';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Dynamic FAQ data based on product category
const getFAQData = (product: any) => {
  const commonFAQs = [
    {
      question: "What makes this product special?",
      answer: `Our ${product.name} is carefully crafted with premium quality ingredients and traditional methods to ensure the highest standards of purity and nutrition.`
    },
    {
      question: "How should I store this product?",
      answer: product.category === 'milk' 
        ? "Store in refrigerator at 4°C or below. Consume within 2-3 days of opening."
        : product.category === 'ghee'
        ? "Store in a cool, dry place in an airtight container. No refrigeration needed. Can last up to 12 months."
        : product.category === 'spices'
        ? "Store in a cool, dry place away from direct sunlight. Keep in airtight container to maintain freshness and potency."
        : "Store in a cool, dry place away from moisture and direct sunlight."
    }
  ];

  const categorySpecificFAQs = {
    milk: [
      {
        question: "Is this milk from grass-fed cows?",
        answer: "Yes, our cows are grass-fed and graze naturally on organic pastures, ensuring the highest quality milk rich in nutrients."
      },
      {
        question: "Is this A2 milk?",
        answer: "Yes, our milk comes from indigenous cow breeds that naturally produce A2 beta-casein protein, which is easier to digest."
      },
      {
        question: "How often is the milk tested for quality?",
        answer: "Our milk undergoes daily quality testing for purity, fat content, and bacterial count to ensure it meets the highest standards."
      }
    ],
    ghee: [
      {
        question: "What is the Bilona method?",
        answer: "The Bilona method is a traditional process where curd is hand-churned using a wooden churner to extract butter, which is then slow-cooked to make pure ghee."
      },
      {
        question: "What's the difference between A1 and A2 ghee?",
        answer: "A2 ghee is made from A2 milk which contains A2 beta-casein protein. Many people find A2 products easier to digest compared to A1 products."
      },
      {
        question: "Can I use this ghee for high-temperature cooking?",
        answer: "Yes, our ghee has a high smoke point (around 250°C), making it ideal for deep frying, sautéing, and all types of cooking."
      }
    ],
    spices: [
      {
        question: "Are these spices organic and chemical-free?",
        answer: "Yes, our spices are 100% organic, grown without pesticides, and processed without any artificial colors or preservatives."
      },
      {
        question: "How do you ensure the spices retain their potency?",
        answer: "We use traditional stone-grinding methods and sun-drying techniques to preserve the natural oils and active compounds in our spices."
      },
      {
        question: "What is the shelf life of these spices?",
        answer: "Our spices maintain their potency for 12-18 months when stored properly in airtight containers away from moisture and light."
      }
    ],
    fertilizer: [
      {
        question: "Is this fertilizer safe for organic farming?",
        answer: "Yes, our organic fertilizer is 100% natural and certified for organic farming. It contains no harmful chemicals or synthetic additives."
      },
      {
        question: "How should I apply this fertilizer?",
        answer: "Mix with soil before planting or apply around existing plants. Use 2-3 handfuls per square meter for best results."
      },
      {
        question: "How long does it take to see results?",
        answer: "You'll start seeing improved plant growth within 2-4 weeks of application, with full benefits visible in 6-8 weeks."
      }
    ]
  };

  return [
    ...commonFAQs,
    ...(categorySpecificFAQs[product.category as keyof typeof categorySpecificFAQs] || [])
  ];
};

const ProductDetailClient = observer(({ product }: { product: any }) => {
  const [selectedImage, setSelectedImage] = useState(product.image[0]);
  const [quantity, setQuantity] = useState(1);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = getFAQData(product);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-16">
        {/* Image Gallery */}
        <div className="w-full lg:w-1/2">
          <div className="flex gap-4">
            {/* Thumbnail Images - Fixed Layout */}
            <div className="flex flex-col gap-2 flex-shrink-0">
              <div className="w-20 space-y-2 max-h-[500px] overflow-y-auto">
                {product.image.map((img: string, i: number) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    className={`w-20 h-20 object-cover rounded cursor-pointer border-2 transition-all duration-200 hover:border-orange-400 ${
                      selectedImage === img ? 'border-orange-600 shadow-md' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
            
            {/* Main Image */}
            <div className="flex-1">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Benefits</h4>
            <ul className="space-y-2">
              {product.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-3xl font-bold text-orange-600">
            ₹{product.price}
            <span className="text-lg text-gray-500 font-normal ml-2">
              per {product.category === 'milk' ? 'litre' : product.category === 'fertilizer' ? 'kg' : 'pack'}
            </span>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className="px-4 py-2 min-w-[60px] text-center border-x border-gray-300">{quantity}</span>
              <button
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => cartStore.addItem(product, quantity)}
            className="bg-orange-600 text-white w-full py-3 rounded-lg hover:bg-orange-700 font-semibold text-lg transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                {expandedFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedFAQ === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProductDetailClient;