// types/html2pdf.d.ts
declare module 'html2pdf.js' {
  const html2pdf: {
    (): {
      set: (options: any) => {
        from: (element: HTMLElement) => {
          save: () => Promise<void>;
        };
      };
    };
  };

  export default html2pdf;
}
