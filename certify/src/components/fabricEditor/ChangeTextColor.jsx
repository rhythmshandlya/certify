import React, { useContext, useState } from "react";
import { fabric } from "fabric";
import canvasContext from "../../context/canvasContext";

const ChangBackground = () => {
  const { canvas } = useContext(canvasContext);
  const [bgColor, setBgColor] = useState();

  return (
    <>
      <input
        type="color"
        value={bgColor}
        className="m-4"
        onChange={(e) => {
          setBgColor(e.target.value);
          canvas.getActiveObject().set("fill", e.target.value);
          canvas.renderAll();
        }}
      />
    </>
  );
};

export default ChangBackground;
