import React, { useContext, useState } from "react";
import canvasContext from "../../context/canvasContext";

const ChangeCanvasSize = () => {
  const { canvas } = useContext(canvasContext);

  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(800);

  const handleCanvasHeight = () => {
    canvas.setDimensions({ height, width });
    canvas.renderAll();

    console.log(canvas);
  };

  return (
    <div className="m-4">
      <input
        type="number"
        value={height}
        className="form-control
        inline-block
        w-[100px]
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-2
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      />
      <input
        type="number"
        value={width}
        className="     
        form-control
        inline-block
        w-[100px]
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-2
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={(e) => {
          setWidth(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCanvasHeight}
      >
        Change Size
      </button>
    </div>
  );
};

export default ChangeCanvasSize;
