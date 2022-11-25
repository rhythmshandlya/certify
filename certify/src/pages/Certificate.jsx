import React, { useState } from "react";
import CertificateCanvas from "../components/certiComponents/CertificateCanvas";
import jsPDF from "jspdf";
import { useParams } from "react-router-dom";

const Certificate = () => {
  const [canvas, setCanvas] = useState(null);
  const { id, pid } = useParams();

  const handleDownload = () => {
    var pdf = new jsPDF("l", "px", [canvas.width, canvas.height]);
    pdf.addImage(
      document.getElementById("canvas_readonly").toDataURL({ pixelRatio: 2 }),
      0,
      0,
      canvas.width,
      canvas.height
    );
    pdf.save("canvas.pdf");
  };

  return (
    <>
      <div className="mx-auto my-10 w-fit">
        <CertificateCanvas
          id={id}
          pid={pid}
          setCanvas={setCanvas}
          canvas={canvas}
        />
        <button
          onClick={handleDownload}
          className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 my-4  rounded inline-flex items-center text-3xl bg-blue-700 text-white"
        >
          <svg
            class="fill-current w-[28px] mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
        </button>
      </div>
    </>
  );
};

export default Certificate;
