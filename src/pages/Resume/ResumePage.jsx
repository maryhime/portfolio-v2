import React, { Fragment, useState } from "react";
import { Document, Page } from "react-pdf";

const ResumePage = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div>
      <Document
        file={"./Banderlipe_RenoAngelo-Resume.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page height={600} width={600} size="A4" pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default ResumePage;
