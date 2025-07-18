import { useRef, useCallback } from 'react';
// @ts-ignore
// import html2pdf from 'html2pdf.js';


export const useCatalogPDFDownload = () => {
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleCatalogDownload = useCallback(async () => {
    if (!catalogRef.current) {
      console.error('Catalog reference not found');
      return;
    }

    try {
      // Show loading state (you can add a loading spinner here)
      console.log('Generating PDF...');
      // @ts-ignore
      const html2pdf = (await import('html2pdf.js')).default;

      // Configure html2pdf options
      const options = {
        margin: [0.5, 0.5, 0.5, 0.5], // top, left, bottom, right in inches
        filename: 'Mitray-Organic-Products-Export-Catalog-2024.pdf',
        image: { 
          type: 'jpeg', 
          quality: 0.98 
        },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true,
          allowTaint: false,
          backgroundColor: '#ffffff',
          logging: false,
          width: 794, // A4 width in pixels at 96 DPI
          height: 1123 // A4 height in pixels at 96 DPI
        },
        jsPDF: { 
          unit: 'in', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.pdf-product-card',
          after: '.pdf-contact-section'
        }
      };

      // Generate and download PDF
      await html2pdf()
        .set(options)
        .from(catalogRef.current)
        .save();

      console.log('PDF generated successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  }, []);

  return { 
    catalogRef, 
    handleCatalogDownload 
  };
};