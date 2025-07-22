import React from 'react';

interface CatalogPDFComponentProps {}

const CatalogPDFComponent = React.forwardRef<HTMLDivElement, CatalogPDFComponentProps>((props, ref) => {
  const products = [
    {
      name: "Premium A2 Ghee",
      emoji: "🧈",
      description: "Pure A2 Ghee from Indigenous Cow Milk using Traditional Bilona Method",
      benefits: ["100% Pure A2 Protein", "Rich in Omega-3", "No Artificial Colors", "Traditional Processing"],
      packaging: "250g, 500g, 1kg containers",
      shelfLife: "12 months",
      certifications: "Organic, FSSAI Approved"
    },
    {
      name: "Organic Red Chili Powder",
      emoji: "🌶️",
      description: "Sun-dried Red Chili Powder with Traditional Stone Grinding",
      benefits: ["Natural Color Retention", "Rich in Capsaicin", "Zero Chemicals", "Sun-Dried Process"],
      packaging: "100g, 250g, 500g containers",
      shelfLife: "24 months",
      certifications: "Heat Level: Medium to High (Customizable)"
    },
    {
      name: "Pure Turmeric Powder",
      emoji: "🟡",
      description: "Golden Turmeric Powder from Organically Grown Roots",
      benefits: ["High Curcumin Content (3-5%)", "Anti-inflammatory Properties", "Natural Golden Color", "Pesticide-Free"],
      packaging: "50g to 1kg sealed pouches",
      shelfLife: "36 months",
      certifications: "Curcumin: 3-5% content guaranteed"
    },
    {
      name: "Organic Khatar (Desi Ghee)",
      emoji: "🥛",
      description: "Traditional Buffalo Milk Khatar using Age-old Methods",
      benefits: ["Rich in Nutrients", "Authentic Traditional Taste", "Buffalo Milk Base", "Traditional Processing"],
      packaging: "Temperature-controlled export packaging",
      shelfLife: "18 months",
      certifications: "International Food Safety Standards"
    }
  ];

  const features = [
    { icon: "🌱", title: "100% Organic", desc: "Certified organic products with no chemicals or pesticides" },
    { icon: "🏆", title: "Traditional Methods", desc: "Ancient techniques preserved for authentic taste and quality" },
    { icon: "🌍", title: "Global Reach", desc: "Serving 25+ countries with reliable shipping and quality" },
    { icon: "✅", title: "Quality Assured", desc: "International certifications and rigorous quality checks" },
    { icon: "🚚", title: "Reliable Logistics", desc: "Temperature-controlled shipping and timely delivery" },
    { icon: "💰", title: "Competitive Pricing", desc: "Best export prices with flexible payment terms" }
  ];

  return (
    <div 
      ref={ref} 
      style={{
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.4',
        color: '#333',
        background: 'white',
        width: '800px',
        margin: '0 auto',
        padding: '0',
        fontSize: '13px'
      }}
    >
      {/* Page 1 - Header and Company Info */}
      <div style={{ pageBreakAfter: 'avoid', minHeight: '400px' }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
          color: 'white',
          padding: '30px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <h1 style={{
            fontSize: '2.2rem',
            marginBottom: '8px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            margin: '0 0 8px 0'
          }}>
            MITRAY ORGANIC PRODUCTS
          </h1>
          <p style={{
            fontSize: '1.1rem',
            opacity: '0.9',
            margin: '0'
          }}>
            Premium Export Catalog 2024
          </p>
        </div>

        {/* Company Info */}
        <div style={{
          background: '#f8fafc',
          padding: '25px',
          borderLeft: '5px solid #ea580c',
          marginBottom: '30px'
        }}>
          <h2 style={{
            color: '#ea580c',
            marginBottom: '12px',
            fontSize: '1.4rem',
            margin: '0 0 12px 0'
          }}>
            About Mitray
          </h2>
          <p style={{ margin: '0', lineHeight: '1.5' }}>
            Mitray is a leading exporter of premium organic products from India, committed to delivering authentic taste and superior quality to global markets. With over 25+ countries served and 1000+ satisfied customers, we are your trusted partner for genuine Indian organic products.
          </p>
        </div>

        {/* Products Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{
            color: '#ea580c',
            fontSize: '1.8rem',
            margin: '0 0 10px 0'
          }}>
            Our Premium Export Products
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: '#ea580c',
            margin: '0 auto'
          }}></div>
        </div>
      </div>

      {/* Products - Each product on separate page or grouped properly */}
      {products.map((product, index) => (
        <div key={index} style={{
          pageBreakBefore: index === 0 ? 'auto' : 'always',
          pageBreakAfter: 'auto',
          pageBreakInside: 'avoid',
          minHeight: '600px',
          padding: '20px 0'
        }}>
          <div style={{
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'white',
            marginBottom: '20px'
          }}>
            {/* Product Image Header */}
            <div style={{
              width: '100%',
              height: '120px',
              background: 'linear-gradient(45deg, #ea580c, #dc2626)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '3.5rem',
              fontWeight: 'bold'
            }}>
              {product.emoji}
            </div>
            
            {/* Product Content */}
            <div style={{ padding: '25px' }}>
              <h3 style={{
                color: '#ea580c',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '15px',
                margin: '0 0 15px 0'
              }}>
                {product.name}
              </h3>
              
              <div style={{ 
                display: 'flex', 
                gap: '25px',
                flexWrap: 'wrap'
              }}>
                {/* Left Column */}
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h4 style={{
                    color: '#374151',
                    marginBottom: '8px',
                    fontSize: '1rem',
                    margin: '0 0 8px 0'
                  }}>
                    Product Details:
                  </h4>
                  <p style={{ margin: '0 0 20px 0', lineHeight: '1.5' }}>
                    {product.description}
                  </p>
                  
                  <h4 style={{
                    color: '#374151',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    margin: '0 0 10px 0'
                  }}>
                    Key Benefits:
                  </h4>
                  <ul style={{ 
                    listStyle: 'none', 
                    margin: '0 0 20px 0', 
                    padding: '0' 
                  }}>
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} style={{
                        padding: '4px 0',
                        position: 'relative',
                        paddingLeft: '20px',
                        lineHeight: '1.4'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#10b981',
                          fontWeight: 'bold'
                        }}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Right Column */}
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h4 style={{
                    color: '#374151',
                    marginBottom: '10px',
                    fontSize: '1rem',
                    margin: '0 0 10px 0'
                  }}>
                    Export Specifications:
                  </h4>
                  <div style={{ lineHeight: '1.6' }}>
                    <p style={{ margin: '0 0 8px 0' }}>
                      <strong>Packaging:</strong> {product.packaging}
                    </p>
                    <p style={{ margin: '0 0 8px 0' }}>
                      <strong>Shelf Life:</strong> {product.shelfLife}
                    </p>
                    <p style={{ margin: '0' }}>
                      <strong>Certifications:</strong> {product.certifications}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Why Mitray Section - New Page */}
      <div style={{
        pageBreakBefore: 'always',
        pageBreakInside: 'avoid',
        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        padding: '30px',
        margin: '0',
        minHeight: '500px'
      }}>
        <h2 style={{
          color: '#92400e',
          textAlign: 'center',
          marginBottom: '25px',
          fontSize: '1.8rem',
          margin: '0 0 25px 0'
        }}>
          Why Choose Mitray?
        </h2>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          justifyContent: 'space-between'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '20px 15px',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              flex: '0 0 calc(50% - 8px)',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#ea580c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px',
                color: 'white',
                fontSize: '1.3rem',
                fontWeight: 'bold'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '1rem',
                color: '#374151'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                margin: '0', 
                fontSize: '0.85rem',
                lineHeight: '1.4',
                color: '#6b7280'
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section - Final Page */}
      <div style={{
        pageBreakBefore: 'always',
        pageBreakInside: 'avoid',
        background: '#1f2937',
        color: 'white',
        padding: '30px',
        textAlign: 'center',
        minHeight: '400px'
      }}>
        <h2 style={{
          color: '#fbbf24',
          marginBottom: '15px',
          margin: '0 0 15px 0',
          fontSize: '1.6rem'
        }}>
          Contact Information
        </h2>
        <p style={{ margin: '0 0 25px 0', lineHeight: '1.5' }}>
          Ready to experience authentic Indian flavors? Get in touch with our export team today!
        </p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '25px',
          marginTop: '25px',
          textAlign: 'left',
          justifyContent: 'space-between'
        }}>
          <div style={{ flex: '0 0 calc(50% - 12px)' }}>
            <h3 style={{
              color: '#fbbf24',
              marginBottom: '12px',
              margin: '0 0 12px 0',
              fontSize: '1.1rem'
            }}>
              Export Services
            </h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <p style={{ margin: '4px 0' }}>• Minimum Order Quantity: Varies by product</p>
              <p style={{ margin: '4px 0' }}>• Payment Terms: LC, TT, or as per agreement</p>
              <p style={{ margin: '4px 0' }}>• Shipping: CIF, FOB, or Ex-Works</p>
              <p style={{ margin: '4px 0' }}>• Documentation: All export documents provided</p>
              <p style={{ margin: '4px 0' }}>• Quality Assurance: Pre-shipment inspection available</p>
            </div>
          </div>
          <div style={{ flex: '0 0 calc(50% - 12px)' }}>
            <h3 style={{
              color: '#fbbf24',
              marginBottom: '12px',
              margin: '0 0 12px 0',
              fontSize: '1.1rem'
            }}>
              Get In Touch
            </h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <p style={{ margin: '4px 0' }}><strong>Company:</strong> Mitray Organic Products</p>
              <p style={{ margin: '4px 0' }}><strong>Email:</strong> mitraygir2025@gmail.com</p>
              <p style={{ margin: '4px 0' }}><strong>Phone:</strong> +91-XXXXXXXXXX</p>
              <p style={{ margin: '4px 0' }}><strong>Website:</strong> www.mitray.com</p>
            </div>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '25px', 
          paddingTop: '20px', 
          borderTop: '1px solid #374151',
          fontSize: '0.85rem'
        }}>
          <p style={{ margin: '0 0 12px 0', lineHeight: '1.4' }}>
            <strong>Certifications:</strong> Organic Certification • FSSAI License • Export License • ISO 22000 • HACCP Certified
          </p>
          <p style={{ 
            marginTop: '12px', 
            opacity: '0.8',
            margin: '12px 0 0 0'
          }}>
            © 2024 Mitray Organic Products. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
});

CatalogPDFComponent.displayName = 'CatalogPDFComponent';

export default CatalogPDFComponent;