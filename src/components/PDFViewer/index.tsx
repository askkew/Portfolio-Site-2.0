import React from 'react';
// @ts-ignore
const PdfViewer = ({ pdfUrl }) => {
  return (
    <embed style={{borderRadius: '50px'}} src={pdfUrl} type="application/pdf" width="100%" height="1200px" />
  );
};

export default PdfViewer;