import React, { useContext, useState } from "react";
import { axiosPrivate } from "../../api/axios";
import canvasContext from "../../context/canvasContext";

const Save = ({ id }) => {
  const { canvas } = useContext(canvasContext);
  const [save, setSave] = useState("save");
  const handleCertificateSave = async function() {
    const certi = JSON.stringify(canvas);
    try {
      setSave("saving..");
      await axiosPrivate.patch("/events/" + id, { certificate: certi });
      setSave("save");
    } catch (error) {
      alert("Error While Saving");
      console.log(error);
      setSave("save");
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded m-1 px-10 py-2"
        onClick={handleCertificateSave}
      >
        {save}
      </button>
    </div>
  );
};

export default Save;
