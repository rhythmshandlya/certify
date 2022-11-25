import { useContext, useEffect, useLayoutEffect } from "react";
import { fabric } from "fabric";
import canvasContext from "../../context/canvasContext";

const canvasStyle = {
  border: "3px solid black",
};

export default function CanvasApp() {
  const { setCanvas } = useContext(canvasContext);

  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      height: 800,
      width: 1200,
      selectionLineWidth: 2,
      controlsAboveOverlay: true,
      centeredScaling: true,
      preserveObjectStacking: true,
    });
    canvas.renderAll();
    setCanvas(canvas);
  }, []);

  return <canvas id="canvas" style={canvasStyle} />;
}
