/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Leaf, Award, Globe, Truck, Shield, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCatalogPDFDownload } from "@/components/useCatalogPDFDownload";
import CatalogPDFComponent from "@/components/CatalogPDFComponent";

const Export = () => {
    const { catalogRef, handleCatalogDownload } = useCatalogPDFDownload();
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to handle export quote email
    const handleExportQuote = () => {
        console.log("send mail")
        const subject = encodeURIComponent('Export Quote Request - Mitray Organic Products');
        const body = encodeURIComponent(`Dear Mitray Export Team,

        I am interested in importing your premium organic products and would like to request a detailed export quotation.

        PRODUCTS OF INTEREST:
        □ Premium A2 Ghee
        □ Organic Red Chili Powder  
        □ Pure Turmeric Powder
        □ Organic Khatar (Desi Ghee)

        BUSINESS DETAILS:
        Company Name: [Your Company Name]
        Country: [Your Country]
        Contact Person: [Your Name]
        Phone: [Your Phone Number]

        REQUIREMENTS:
        Estimated Monthly Quantity: [Please specify]
        Preferred Packaging: [Please specify]
        Target Market: [Retail/Wholesale/Distribution]

        ADDITIONAL INFORMATION:
        - Please provide FOB and CIF pricing
        - Minimum order quantities for each product
        - Available packaging options
        - Shipping timeline and logistics
        - Payment terms and conditions
        - Product samples availability
        - Certifications and quality documents

        I look forward to establishing a long-term business relationship with Mitray.

        Best regards,
        [Your Name]
        [Your Company]
        [Your Email]
        [Your Phone]`);
        
        window.location.href = `mailto:mitraygir2025@gmail.com?subject=${subject}&body=${body}`;
    };

    const exportProducts = [
        {
            id: 1,
            name: "Premium A2 Ghee",
            images: [
                "/cow2.jpg",
                "/ghee3.webp",
                "/ghee1.jpg",
                "/different.jpg"
            ],
            description: "Pure A2 ghee made from indigenous cow milk using traditional churning methods. Rich in vitamins and beneficial fatty acids.",
            benefits: ["100% Pure A2 Protein", "Rich in Omega-3", "Traditional Bilona Method", "No Artificial Colors"],
            exportDetails: "Available in 250g, 500g, and 1kg premium packaging suitable for international shipping."
        },
        {
            id: 2,
            name: "Organic Red Chili Powder",
            images: [
                "/chilli2.webp",
                "/chilli.jfif",
                "/chilli3.webp",
                "/chilli1.webp"],
            description: "Sun-dried red chilies ground to perfection, retaining natural color and authentic heat. No artificial additives or preservatives.",
            benefits: ["Sun-Dried Process", "Natural Color Retention", "Rich in Capsaicin", "Zero Chemicals"],
            exportDetails: "Premium packaging in 100g, 250g, and 500g containers with extended shelf life for global markets."
        },
        {
            id: 3,
            name: "Pure Turmeric Powder",
            images: [
                "/Turmeric.jpg",
                "/tu1.webp",
                "/t3.webp",
                "/t2.jpg"
            ],
            description: "Golden turmeric powder from organically grown turmeric roots. High curcumin content with anti-inflammatory properties.",
            benefits: ["High Curcumin Content", "Anti-inflammatory", "Natural Golden Color", "Pesticide-Free"],
            exportDetails: "Available in sealed pouches from 50g to 1kg, perfect for retail and bulk export requirements."
        },
        {
            id: 4,
            name: "Organic Khatar (Desi Khatar)",
            images: [
                "/k2.webp",
                "/k3.webp",
                "/k4.webp",
                "/k1.jfif",
            ],
            description: "Premium organic cow dung cakes (khatar) made from pure desi cow dung, naturally sun-dried using traditional methods. These eco-friendly fuel cakes are perfect for religious ceremonies, cooking, and sustainable heating with zero chemical additives.",
            benefits: ["100% Natural & Organic", "Eco-Friendly Fuel", "Religious Ceremonies", "Chemical-Free Process"],
            exportDetails: "Carefully dried and compressed into uniform cakes, packed in moisture-resistant packaging suitable for international shipping with extended shelf life."
        }
    ];

    const openGallery = (product:any) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setSelectedProduct(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProduct) {
            setCurrentImageIndex((prev) => 
                prev === selectedProduct.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProduct) {
            setCurrentImageIndex((prev) => 
                prev === 0 ? selectedProduct.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
                <CatalogPDFComponent ref={catalogRef} />
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-50 to-orange-100 text-white py-5 md:py-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-xl md:text-4xl text-black font-bold mb-6">
                            Export Quality Products
                        </h1>
                        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-8">
                            Taking the authentic taste of India to the world with our premium organic products
                        </p>
                        <div className="flex justify-center space-x-8 text-orange-500">
                            <div className="text-center">
                                <div className="text-2xl font-bold">25+</div>
                                <div className="text-sm">Countries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">1000+</div>
                                <div className="text-sm">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">100%</div>
                                <div className="text-sm">Organic</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Mitray Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
                            Why Choose Mitray for Export?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our commitment to quality, tradition, and sustainability makes us the perfect partner for bringing authentic Indian flavors to global markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-orange-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                            <Leaf className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">100% Organic</h3>
                            <p className="text-gray-600">
                                All our products are certified organic, grown without pesticides or harmful chemicals, ensuring pure and healthy nutrition.
                            </p>
                        </div>

                        <div className="bg-orange-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                            <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Traditional Methods</h3>
                            <p className="text-gray-600">
                                We preserve ancient techniques passed down through generations, ensuring authentic taste and maximum nutritional value.
                            </p>
                        </div>

                        <div className="bg-orange-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                            <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h3>
                            <p className="text-gray-600">
                                Every batch undergoes rigorous testing and quality checks to meet international food safety standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Export Products Section with Enhanced Gallery */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Our Premium Export Products
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our flagship products that have won hearts across the globe with their authentic taste and superior quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {exportProducts.map((product, index) => (
                            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="md:flex">
                                    <div className="md:w-1/2 relative group">
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="w-full h-64 md:h-full object-cover transition-all duration-300 group-hover:scale-105"
                                        />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <button
                                                onClick={() => openGallery(product)}
                                                className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg"
                                            >
                                                <Eye className="w-6 h-6 text-gray-800" />
                                            </button>
                                        </div>
                                        {/* Image Count Badge */}
                                        <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-sm">
                                            +{product.images.length - 1}
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 p-8">
                                        <div className="flex items-center mb-4">
                                            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                                                Export Ready
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                                        <p className="text-gray-600 mb-6">{product.description}</p>
                                        
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {product.benefits.map((benefit, idx) => (
                                                    <div key={idx} className="flex items-center">
                                                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                                                        <span className="text-sm text-gray-600">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="border-t pt-4">
                                            <h4 className="text-sm font-semibold text-gray-800 mb-2">Export Details:</h4>
                                            <p className="text-sm text-gray-600">{product.exportDetails}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full">
                        {/* Close Button */}
                        <button
                            onClick={closeGallery}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Main Image */}
                        <div className="relative">
                            <img
                                src={selectedProduct.images[currentImageIndex]}
                                alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
                                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                            />

                            {/* Navigation Arrows */}
                            {selectedProduct.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-white" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                                    >
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </button>
                                </>
                            )}

                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                                {currentImageIndex + 1} / {selectedProduct.images.length}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="bg-white rounded-lg mt-4 p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h3>
                            <p className="text-gray-600">{selectedProduct.description}</p>
                        </div>

                        {/* Thumbnail Navigation */}
                        {selectedProduct.images.length > 1 && (
                            <div className="flex justify-center space-x-2 mt-4">
                                {selectedProduct.images.map((image:any, index:any) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                            index === currentImageIndex 
                                                ? 'border-orange-500 opacity-100' 
                                                : 'border-gray-300 opacity-60 hover:opacity-80'
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Export Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Our Export Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From farm to your doorstep, we ensure the highest quality standards at every step.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-orange-600 font-bold text-xl">1</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sourcing</h3>
                            <p className="text-gray-600 text-sm">Direct from certified organic farms with sustainable practices</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-orange-600 font-bold text-xl">2</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Processing</h3>
                            <p className="text-gray-600 text-sm">Traditional methods combined with modern hygiene standards</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-orange-600 font-bold text-xl">3</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Packaging</h3>
                            <p className="text-gray-600 text-sm">Export-grade packaging ensuring freshness and quality</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Shipping</h3>
                            <p className="text-gray-600 text-sm">Temperature-controlled logistics for global delivery</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100 text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Experience Authentic Indian Flavors?
                    </h2>
                    <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers worldwide who trust Mitray for pure, organic, and traditional Indian products.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={handleExportQuote} className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                            Request Export Quote
                        </button>
                        <button onClick={handleCatalogDownload} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 hover:text-blue-900 transition-colors">
                            Download Product Catalog
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Export;