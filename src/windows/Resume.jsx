import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";

// import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header" className="flex gap-2 ">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/cv_public.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      {/* <Document
        file="/files/cv_public.pdf"
        onLoadError={(err) => console.error("PDF ERROR:", err)}
      >
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document> */}
    </>
  );
};
const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;

// 2:12:43
