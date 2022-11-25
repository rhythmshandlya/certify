import React, { useContext } from "react";
import canvasContext from "../../context/canvasContext";

const DeleteElement = () => {
  const { canvas } = useContext(canvasContext);

  const handleDeleteElement = () => {
    canvas.remove(canvas.getActiveObject());
  };
  return (
    <div onClick={handleDeleteElement} className="m-4">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAY0lEQVRIiWNgGAWDGBxnYGD4j4aPUcvww1gMJxcfxmYBE7Vcigf8p4MdQwAw4pGjVhBhtYMecYwVjFo8avGoxaMWj1o8avHQsvgJFcx/TI4mT6hGcht5jxgYGDwodPgoGMIAAIf9LS9I+wcVAAAAAElFTkSuQmCC"
        width="30px"
        alt=""
        className="hover:cursor-pointer"
      />
    </div>
  );
};

export default DeleteElement;
