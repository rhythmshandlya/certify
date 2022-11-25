import React, { useContext } from "react";
import canvasContext from "../../context/canvasContext";
import { fabric } from "fabric";

const AddText = () => {
  const { canvas } = useContext(canvasContext);
  const onAddCircle = () => {
    var object = new fabric.Circle({
      radius: 40,
      fill: "blue",
      left: 100,
      top: 100,
    });
    canvas.add(object);
  };

  return <button className="btn" onClick={onAddCircle}></button>;
};

export default AddText;
