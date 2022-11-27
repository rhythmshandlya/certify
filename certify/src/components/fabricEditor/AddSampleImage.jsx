import React, { useContext, useState } from "react";
import images from "./imageMetaData";
import { fabric } from "fabric";
import canvasContext from "../../context/canvasContext";

const AddSampleImage = () => {
  const { canvas } = useContext(canvasContext);

  const addImageToCanvas = (url) => {
    fabric.Image.fromURL(
      url,
      function(myImg) {
        var img = myImg.set({ left: 0, top: 0 });
        canvas.add(img);
      },
      { crossOrigin: "anonymous" }
    );
  };
  return (
    <div className="ml-6 border-4 p-6 bg-gray-100 w-[450px] h-[800px] overflow-y-scroll">
      <div className="text-2xl my-4">Sample Image</div>
      <div className="flex flex-wrap">
        {images.map((img) => {
          return (
            <img
              src={`${img}`}
              onClick={() => {
                addImageToCanvas(img);
              }}
              className="m-3 hover:border-2 border-black"
              alt="Failed"
              width="100px"
              height="50px"
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddSampleImage;
