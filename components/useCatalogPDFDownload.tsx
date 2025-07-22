import { useRef, useCallback } from 'react';

export const useCatalogPDFDownload = () => {
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleCatalogDownload = useCallback(async () => {
    if (!catalogRef.current) {
      console.error('Catalog reference not found');
      return;
    }

    try {
      console.log('Generating PDF...');
      
      // Temporarily show the component for PDF generation
      const catalogElement = catalogRef.current;
      catalogElement.style.position = 'static';
      catalogElement.style.left = 'auto';
      catalogElement.style.top = 'auto';
      catalogElement.style.visibility = 'visible';
      catalogElement.style.display = 'block';

      // Wait for images and content to load
      await new Promise(resolve => setTimeout(resolve, 1000));

      const html2pdf = (await import('html2pdf.js')).default;

      const options = {
        margin: [0.4, 0.4, 0.4, 0.4],
        filename: 'Mitray-Organic-Products-Export-Catalog-2024.pdf',
        image: { 
          type: 'jpeg', 
          quality: 0.85 
        },
        html2canvas: { 
          scale: 1.2,
          useCORS: true,
          allowTaint: false,
          backgroundColor: '#ffffff',
          logging: false,
          width: 794,
          height: 1123,
          scrollX: 0,
          scrollY: 0,
          windowWidth: 794,
          windowHeight: 1123
        },
        jsPDF: { 
          unit: 'in', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true,
          putOnlyUsedFonts: true
        },
        pagebreak: { 
          mode: ['css', 'legacy', 'whiteline'],
          before: ['#page2', '#page3', '#page4', '#page5'],
          after: ['#page1-end'],
          avoid: ['tr', 'img']
        }
      };

      await html2pdf()
        .set(options)
        .from(catalogElement)
        .save();

      console.log('PDF generated successfully!');
      
      // Hide the component again
      catalogElement.style.position = 'absolute';
      catalogElement.style.left = '-9999px';
      catalogElement.style.top = '-9999px';
      catalogElement.style.visibility = 'hidden';

    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Restore hidden state in case of error
      if (catalogRef.current) {
        catalogRef.current.style.position = 'absolute';
        catalogRef.current.style.left = '-9999px';
        catalogRef.current.style.top = '-9999px';
        catalogRef.current.style.visibility = 'hidden';
      }
      
      alert('There was an error generating the PDF. Please try again.');
    }
  }, []);

  return { 
    catalogRef, 
    handleCatalogDownload 
  };
};