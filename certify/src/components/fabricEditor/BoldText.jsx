import React, { useContext } from "react";
import canvasContext from "../../context/canvasContext";

const BoldText = () => {
  const { canvas } = useContext(canvasContext);
  const boldText = () => {
    if (canvas.getActiveObject().fontWeight === "bold")
      canvas.getActiveObject().set("fontWeight", "normal");
    else canvas.getActiveObject().set("fontWeight", "bold");
    canvas.renderAll();
  };
  return (
    <div className="m-5" onClick={boldText}>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABSklEQVRIibXVSytFURjG8d9BGLoUpUjKTBmYMJMBn8BApjIxNfUxlHwBM8lAqfMRGDBCIQNJ5DKQS26Dc06ObS3nsvd5atVe7356/+tda72tnB/14dL/esYTznGIXewUYxXVh686xi2W0dwoQGlso6WRgC+sJJPmEoDQGawjX/zuwAjm0R3w3hTzvNdSwWLA24mjiH+03NgUIlWhe2xG/vVkAYDHSPw6C0AO04H4HU7qBeTQi0lsYSrgWcNLLEHaa7qD9v9WmAawqkKTZVHBqcL2/VI1jbaPs7J5N4bRH/A+YwIHtVQQajSYw0fAH+uPmgGwEfC/o61kSNNoFLYvqWYMZgXoisTfsgB0KJxDUq+4Kk0q3l2MYbZs3oohLGAg4M+LdHMWD84HxmMrTQv4xFIseVrAMWZCSas5g6Re8IAL7Ck89vliBX/0DWk+1xOxmky2AAAAAElFTkSuQmCC"
        alt=""
        className="hover:cursor-pointer"
      />
    </div>
  );
};

export default BoldText;
