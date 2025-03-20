import { useState } from "react";
import { Document, Page } from "react-pdf";
import CustomIcon from "../components/CustomIcon";

const MyResume = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <>
      <div className="flex items-center justify-center gap-x-[450px]">
        {" "}
        <div className="flex items-center justify-center gap-x-3 mb-4">
          <button
            onClick={() => setPageNumber(pageNumber - 1)}
            className="text-white dark:text-black cursor-pointer"
            disabled={pageNumber === 1}
          >
            <CustomIcon icon="ArrowLeftIcon" />
          </button>
          <button
            onClick={() => setPageNumber(pageNumber + 1)}
            className="text-white dark:text-black cursor-pointer"
            disabled={pageNumber === 3}
          >
            <CustomIcon icon="ArrowRightIcon" />
          </button>
        </div>
        <div className="flex items-center justify-center mb-4">
          <p className="text-white dark:text-black">
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>

      <Document
        file="CV.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex items-center justify-center"
      >
        <Page
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </>
  );
};
export default MyResume;
