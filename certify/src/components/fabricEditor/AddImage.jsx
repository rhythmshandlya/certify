import { useContext, useState } from "react";
import { fabric } from "fabric";
import canvasContext from "../../context/canvasContext";

function AddImage() {
  const { canvas } = useContext(canvasContext);
  const [imageUrl, setImageUrl] = useState("");

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
    <div className="flex m-4">
      <input
        type="text"
        value={imageUrl}
        placeholder="www.unsplash.com/someimage.png"
        className="form-control
        w-[560px]
        px-4
        py-2
        text-lg
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-1
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={(e) => {
          setImageUrl(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded m-1"
        onClick={(e) => {
          addImageToCanvas(imageUrl);
        }}
      >
        Add Image
      </button>
    </div>
  );
}

export default AddImage;
