import React from 'react';

interface CatalogPDFComponentProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const CatalogPDFComponent = React.forwardRef<HTMLDivElement, CatalogPDFComponentProps>((props, ref) => {
  return (
    <div ref={ref} className="catalog-pdf-container">
      <style>{`
        .catalog-pdf-container {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          background: white;
          width: 210mm;
          margin: 0 auto;
        }
        
        .pdf-header {
          background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
          color: white;
          padding: 40px;
          text-align: center;
          page-break-inside: avoid;
        }
        
        .pdf-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .pdf-header p {
          font-size: 1.2rem;
          opacity: 0.9;
        }
        
        .pdf-company-info {
          background: #f8fafc;
          padding: 30px;
          border-left: 5px solid #ea580c;
          page-break-inside: avoid;
        }
        
        .pdf-company-info h2 {
          color: #ea580c;
          margin-bottom: 15px;
          font-size: 1.5rem;
        }
        
        .pdf-products-section {
          padding: 40px;
        }
        
        .pdf-section-title {
          text-align: center;
          color: #ea580c;
          font-size: 2rem;
          margin-bottom: 30px;
          position: relative;
          page-break-after: avoid;
        }
        
        .pdf-section-title::after {
          content: '';
          display: block;
          width: 100px;
          height: 3px;
          background: #ea580c;
          margin: 10px auto;
        }
        
        .pdf-product-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .pdf-product-card {
          border: 2px solid #e5e7eb;
          border-radius: 15px;
          overflow: hidden;
          background: white;
          page-break-inside: avoid;
          margin-bottom: 20px;
        }
        
        .pdf-product-image {
          width: 100%;
          height: 150px;
          background: linear-gradient(45deg, #ea580c, #dc2626);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          font-weight: bold;
        }
        
        .pdf-product-content {
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .pdf-product-title {
          color: #ea580c;
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 10px;
          grid-column: 1 / -1;
        }
        
        .pdf-product-details {
          margin-bottom: 15px;
        }
        
        .pdf-product-details h4 {
          color: #374151;
          margin-bottom: 8px;
          font-size: 1rem;
        }
        
        .pdf-benefits-list {
          list-style: none;
          margin-bottom: 15px;
        }
        
        .pdf-benefits-list li {
          padding: 3px 0;
          position: relative;
          padding-left: 20px;
        }
        
        .pdf-benefits-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }
        
        .pdf-why-mitray {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          padding: 40px;
          margin: 40px 0;
          page-break-inside: avoid;
        }
        
        .pdf-why-mitray h2 {
          color: #92400e;
          text-align: center;
          margin-bottom: 30px;
          font-size: 2rem;
        }
        
        .pdf-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .pdf-feature-item {
          text-align: center;
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          page-break-inside: avoid;
        }
        
        .pdf-feature-icon {
          width: 60px;
          height: 60px;
          background: #ea580c;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        .pdf-contact-section {
          background: #1f2937;
          color: white;
          padding: 40px;
          text-align: center;
          page-break-inside: avoid;
        }
        
        .pdf-contact-section h2 {
          color: #fbbf24;
          margin-bottom: 20px;
        }
        
        .pdf-contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 30px;
        }
        
        .pdf-contact-item {
          text-align: left;
        }
        
        .pdf-contact-item h3 {
          color: #fbbf24;
          margin-bottom: 10px;
        }
        
        @media print {
          .catalog-pdf-container {
            width: 100%;
            margin: 0;
          }
          
          .pdf-product-grid {
            grid-template-columns: 1fr;
            page-break-inside: avoid;
          }
          
          .pdf-product-card {
            page-break-inside: avoid;
            break-inside: avoid;
            margin-bottom: 30px;
          }
          
          .pdf-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .pdf-feature-item {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          .pdf-header,
          .pdf-company-info,
          .pdf-why-mitray,
          .pdf-contact-section {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          .pdf-section-title {
            page-break-after: avoid;
          }
        }
      `}</style>
      
      <div className="pdf-header">
        <h1>MITRAY ORGANIC PRODUCTS</h1>
        <p>Premium Export Catalog 2024</p>
      </div>
      
      <div className="pdf-company-info">
        <h2>About Mitray</h2>
        <p>Mitray is a leading exporter of premium organic products from India, committed to delivering authentic taste and superior quality to global markets. With over 25+ countries served and 1000+ satisfied customers, we are your trusted partner for genuine Indian organic products.</p>
      </div>
      
      <div className="pdf-products-section">
        <h2 className="pdf-section-title">Our Premium Export Products</h2>
        
        <div className="pdf-product-grid">
          {/* A2 Ghee */}
          <div className="pdf-product-card">
            <div className="pdf-product-image">🧈</div>
            <div className="pdf-product-content">
              <h3 className="pdf-product-title">Premium A2 Ghee</h3>
              <div className="pdf-product-details">
                <h4>Product Details:</h4>
                <p>Pure A2 Ghee from Indigenous Cow Milk using Traditional Bilona Method</p>
                <h4>Key Benefits:</h4>
                <ul className="pdf-benefits-list">
                  <li>100% Pure A2 Protein</li>
                  <li>Rich in Omega-3</li>
                  <li>No Artificial Colors</li>
                  <li>Traditional Processing</li>
                </ul>
              </div>
              <div className="pdf-product-details">
                <h4>Export Specifications:</h4>
                <p><strong>Packaging:</strong> 250g, 500g, 1kg containers</p>
                <p><strong>Shelf Life:</strong> 12 months</p>
                <p><strong>Certifications:</strong> Organic, FSSAI Approved</p>
              </div>
            </div>
          </div>
          
          {/* Red Chili Powder */}
          <div className="pdf-product-card">
            <div className="pdf-product-image">🌶️</div>
            <div className="pdf-product-content">
              <h3 className="pdf-product-title">Organic Red Chili Powder</h3>
              <div className="pdf-product-details">
                <h4>Product Details:</h4>
                <p>Sun-dried Red Chili Powder with Traditional Stone Grinding</p>
                <h4>Key Benefits:</h4>
                <ul className="pdf-benefits-list">
                  <li>Natural Color Retention</li>
                  <li>Rich in Capsaicin</li>
                  <li>Zero Chemicals</li>
                  <li>Sun-Dried Process</li>
                </ul>
              </div>
              <div className="pdf-product-details">
                <h4>Export Specifications:</h4>
                <p><strong>Packaging:</strong> 100g, 250g, 500g containers</p>
                <p><strong>Shelf Life:</strong> 24 months</p>
                <p><strong>Heat Level:</strong> Medium to High (Customizable)</p>
              </div>
            </div>
          </div>
          
          {/* Turmeric Powder */}
          <div className="pdf-product-card">
            <div className="pdf-product-image">🟡</div>
            <div className="pdf-product-content">
              <h3 className="pdf-product-title">Pure Turmeric Powder</h3>
              <div className="pdf-product-details">
                <h4>Product Details:</h4>
                <p>Golden Turmeric Powder from Organically Grown Roots</p>
                <h4>Key Benefits:</h4>
                <ul className="pdf-benefits-list">
                  <li>High Curcumin Content (3-5%)</li>
                  <li>Anti-inflammatory Properties</li>
                  <li>Natural Golden Color</li>
                  <li>Pesticide-Free</li>
                </ul>
              </div>
              <div className="pdf-product-details">
                <h4>Export Specifications:</h4>
                <p><strong>Packaging:</strong> 50g to 1kg sealed pouches</p>
                <p><strong>Shelf Life:</strong> 36 months</p>
                <p><strong>Curcumin:</strong> 3-5% content guaranteed</p>
              </div>
            </div>
          </div>
          
          {/* Organic Khatar */}
          <div className="pdf-product-card">
            <div className="pdf-product-image">🥛</div>
            <div className="pdf-product-content">
              <h3 className="pdf-product-title">Organic Khatar (Desi Ghee)</h3>
              <div className="pdf-product-details">
                <h4>Product Details:</h4>
                <p>Traditional Buffalo Milk Khatar using Age-old Methods</p>
                <h4>Key Benefits:</h4>
                <ul className="pdf-benefits-list">
                  <li>Rich in Nutrients</li>
                  <li>Authentic Traditional Taste</li>
                  <li>Buffalo Milk Base</li>
                  <li>Traditional Processing</li>
                </ul>
              </div>
              <div className="pdf-product-details">
                <h4>Export Specifications:</h4>
                <p><strong>Packaging:</strong> Temperature-controlled export packaging</p>
                <p><strong>Shelf Life:</strong> 18 months</p>
                <p><strong>Standards:</strong> International Food Safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pdf-why-mitray">
        <h2>Why Choose Mitray?</h2>
        <div className="pdf-features-grid">
          <div className="pdf-feature-item">
            <div className="pdf-feature-icon">🌱</div>
            <h3>100% Organic</h3>
            <p>Certified organic products with no chemicals or pesticides</p>
          </div>
          <div className="pdf-feature-item">
            <div className="pdf-feature-icon">🏆</div>
            <h3>Traditional Methods</h3>
            <p>Ancient techniques preserved for authentic taste and quality</p>
          </div>
          <div className="pdf-feature-item">
            <div className="pdf-feature-icon">🌍</div>
            <h3>Global Reach</h3>
            <p>Serving 25+ countries with reliable shipping and quality</p>
          </div>
          <div className="pdf-feature-item">
            <div className="pdf-feature-icon">✅</div>
            <h3>Quality Assured</h3>
            <p>International certifications and rigorous quality checks</p>
          </div>
          <div className="pdf-feature-item">
            <div className="pdf-feature-icon">🚚</div>
            <h3>Reliable Logistics</h3>
            <p>Temperature-controlled shipping and timely delivery</p>
          </div>
          <div className="pdf-feature-item">
            <div className="pdf-feature-icon">💰</div>
            <h3>Competitive Pricing</h3>
            <p>Best export prices with flexible payment terms</p>
          </div>
        </div>
      </div>
      
      <div className="pdf-contact-section">
        <h2>Contact Information</h2>
        <p>Ready to experience authentic Indian flavors? Get in touch with our export team today!</p>
        
        <div className="pdf-contact-grid">
          <div className="pdf-contact-item">
            <h3>Export Services</h3>
            <p>• Minimum Order Quantity: Varies by product</p>
            <p>• Payment Terms: LC, TT, or as per agreement</p>
            <p>• Shipping: CIF, FOB, or Ex-Works</p>
            <p>• Documentation: All export documents provided</p>
            <p>• Quality Assurance: Pre-shipment inspection available</p>
          </div>
          <div className="pdf-contact-item">
            <h3>Get In Touch</h3>
            <p><strong>Company:</strong> Mitray Organic Products</p>
            <p><strong>Email:</strong> mitraygir2025@gmail.com</p>
            <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
            <p><strong>Website:</strong> www.mitray.com</p>
          </div>
        </div>
        
        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #374151' }}>
          <p><strong>Certifications:</strong> Organic Certification • FSSAI License • Export License • ISO 22000 • HACCP Certified</p>
          <p style={{ marginTop: '15px', opacity: 0.8 }}>© 2024 Mitray Organic Products. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
});

CatalogPDFComponent.displayName = 'CatalogPDFComponent';

export default CatalogPDFComponent;