import React, { useContext } from "react";
import canvasContext from "../../context/canvasContext";

const MoveUpDown = () => {
  const { canvas } = useContext(canvasContext);
  const moveUp = () => {
    canvas.getActiveObject().bringToFront();
  };
  const moveBack = () => {
    canvas.getActiveObject().sendToBack();
  };
  return (
    <div className="my-auto">
      <img
        src="https://img.icons8.com/ios-filled/20/null/up-squared.png"
        alt="up"
        className="hover:cursor-pointer"
        onClick={moveUp}
      />
      <img
        src="https://img.icons8.com/ios-glyphs/20/null/down-squared.png"
        alt="down"
        className="hover:cursor-pointer"
        onClick={moveBack}
      />
    </div>
  );
};

export default MoveUpDown;
