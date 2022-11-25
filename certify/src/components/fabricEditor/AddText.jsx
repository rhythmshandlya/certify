import React, { useContext } from "react";
import canvasContext from "../../context/canvasContext";
import { fabric } from "fabric";
import { v4 as uuidv4 } from "uuid";

const AddText = () => {
  const { canvas } = useContext(canvasContext);
  const onAddText = () => {
    const id = uuidv4();
    const textbox = new fabric.Textbox("Click To Add Text", {
      left: 50,
      top: 50,
      width: 200,
      fontSize: 28,
      fontFamily: "Helvetica",
      fill: "black",
      name: id,
    });

    canvas.centerObject(textbox);
    canvas.add(textbox);
    canvas.requestRenderAll();
  };
  return (
    <div className="m-4" onClick={onAddText}>
      <img
        src="https://img.icons8.com/ios-glyphs/30/null/text.png"
        width="30px"
        alt=""
        className="hover:cursor-pointer"
      />
    </div>
  );
};

export default AddText;
