import React, { useContext, useState } from "react";
import canvasContext from "../../context/canvasContext";

const SetFontsize = () => {
  const [fontSize, setFontSize] = useState(28);
  const { canvas } = useContext(canvasContext);

  return (
    <input
      type="number"
      className="form-control
        block
        w-[60px]
        px-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      value={fontSize}
      onChange={(e) => {
        setFontSize(e.target.value);
        canvas.getActiveObject().set("fontSize", e.target.value);
        canvas.renderAll();
      }}
    />
  );
};

export default SetFontsize;
