import React, { useState } from "react";
import Editor from "../components/fabricEditor/Editor";
import CanvasContext from "../context/canvasContext";
import AddText from "../components/fabricEditor/AddText";
import AddCircle from "../components/fabricEditor/AddCircle";
import ChangBackground from "../components/fabricEditor/ChangBackground";
import SetFontsize from "../components/fabricEditor/SetFontsize";
import SetFontType from "../components/fabricEditor/SetFontType";
import DeleteElement from "../components/fabricEditor/DeleteElement";
import BoldText from "../components/fabricEditor/BoldText";
import AddImage from "../components/fabricEditor/AddImage";

import ChangeTextColor from "../components/fabricEditor/ChangeTextColor";
import ChangeCanvasSize from "../components/fabricEditor/ChangeCanvasSize";
import AddSampleImage from "../components/fabricEditor/AddSampleImage";
import ConvertToPdf from "../components/fabricEditor/ConvertToPdf";
import MoveUpDown from "../components/fabricEditor/MoveUpDown";

const EditorCertificate = () => {
  return (
    <>
      <div className="flex mx-8 mt-3">
        <ChangeCanvasSize />
        <AddImage />
      </div>
      <div className="flex mx-8">
        <ChangBackground />
        <AddText />
        <SetFontsize />
        <SetFontType />
        <BoldText />
        <ChangeTextColor />
        <DeleteElement />
        <MoveUpDown />
        <ConvertToPdf />
      </div>
      <div className="flex">
        <Editor />
        <AddSampleImage />
      </div>
    </>
  );
};

export default EditorCertificate;
