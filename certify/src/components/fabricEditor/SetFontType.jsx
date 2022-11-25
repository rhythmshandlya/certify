import React, { useContext, useState } from "react";
import canvasContext from "../../context/canvasContext";

var fonts = [
  "helvetica",
  "Montserrat",
  "Roboto",
  "verdana",
  "georgia",
  "arial",
  "georgia",
  "courier",
  "impact",
  "monaco",
  "optima",
  "plaster",
  "engagement",
];

const SetFontType = () => {
  const [fontFamily, setFontFamily] = useState("");
  const { canvas } = useContext(canvasContext);

  return (
    <select
      onChange={(e) => {
        setFontFamily(e.target.value);
        console.log(e.target.value);
        console.log(canvas.getActiveObject());
        canvas.getActiveObject().set("fontFamily", e.target.value);
        canvas.requestRenderAll();
      }}
      className="bg-gray-50 border w-[300px] border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-4"
    >
      {fonts.map((font) => {
        return (
          <option value={font}>
            {font.charAt(0).toUpperCase() + font.slice(1)}
          </option>
        );
      })}
    </select>
  );
};

export default SetFontType;
