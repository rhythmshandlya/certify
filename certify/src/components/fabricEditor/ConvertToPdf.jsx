import React, { useContext } from "react";
import canvasContext from "../../context/canvasContext";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";

const ConvertToPdf = () => {
  const { canvas } = useContext(canvasContext);

  function ExportSvg() {
    // let imgData = canvas.toDataURL();
    var blob = new Blob([canvas.toSVG()], { type: "image/svg+xml" });
    saveAs(blob, "graph.svg");
  }
  function ExportPdf() {
    var pdf = new jsPDF("l", "px", [canvas.width, canvas.height]);
    pdf.addImage(
      document.getElementById("canvas").toDataURL({ pixelRatio: 2 }),
      0,
      0,
      canvas.width,
      canvas.height
    );
    pdf.save("canvas.pdf");
  }
  return (
    <div className="flex mx-10 my-2">
      <button
        className="text-gray-400 m-3 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto items-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={ExportSvg}
      >
        To SVG
      </button>
      <button
        className="text-gray-400 m-3 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto items-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={ExportPdf}
      >
        To Pdf
      </button>
    </div>
  );
};

export default ConvertToPdf;
