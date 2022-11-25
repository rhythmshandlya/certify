import { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import { axiosPrivate } from "../../api/axios";

const canvasStyle = {
  pointerEvents: "none",
};

export default function CanvasApp({ canvas, setCanvas, id, pid }) {
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [json, setJson] = useState(null);
  // console.log("Uncomment This");
  const svgRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axiosPrivate.get("/events/" + id);
      console.log(res);
      const json = res.data.certificate.replaceAll(
        "{{name}}",
        res.data.participants[pid].name
      );

      setJson(json);

      const canvas = new fabric.Canvas("canvas_readonly", {
        height: 800,
        width: 1200,
        selectionLineWidth: 2,
        controlsAboveOverlay: true,
        centeredScaling: true,
      });

      canvas.loadFromJSON(json, function() {
        canvas.renderAll();
        setCanvas(canvas);
        setCanvasLoaded(true);
      });
    }

    fetchData();
  }, []);

  return (
    <>
      {canvasLoaded ? (
        <>
          <button
            onClick={() => {
              console.log(canvas);
              svgRef.current.innerHTML = canvas.toSVG();
            }}
          >
            refresh
          </button>
          <div id="canvas_svg" ref={svgRef}></div>
          <canvas id="canvas_readonly" style={canvasStyle} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
