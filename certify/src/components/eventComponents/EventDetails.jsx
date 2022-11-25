import React, { useContext, useEffect, useState } from "react";
import EditorCertificate from "../../pages/Editor";
import Papa from "papaparse";
import Banner from "./banner.png";
import jsPDF from "jspdf";
import CopyToClip from "./CopyToClip";
import canvasContext from "../../context/canvasContext";
import { axiosPrivate } from "../../api/axios";
import Save from "../fabricEditor/Save";

const allowedExtensions = ["csv"];

const EventDetails = ({ id }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [config, setConfig] = useState({});
  const [file, setFile] = useState("");
  const [eventDetails, setEventDetails] = useState({});
  const { canvas } = useContext(canvasContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosPrivate.get("/events/" + id);
      setData(res.data.participants);
      setEventDetails(res.data);
      let json = res.data.certificate;
      canvas.loadFromJSON(json, function() {
        canvas.renderAll();
      });
    };
    fetchData();
  }, []);

  const handleFileChange = (e) => {
    setError("");

    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      const fileExtension = inputFile?.type.split("/")[1];

      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      setFile(inputFile);
    }
  };

  const handleSendMail = async (e) => {
    e.target.innerHTML = "Sending..";
    await axiosPrivate.post("/events/send-certificate", { eventId: id });
    e.target.innerHTML = "Sent Email To All ";
    e.target.classList.add("cursor-not-allowed");
  };

  const handleSubmit = async () => {
    if (!file) return setError("Enter a valid file");

    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      setConfig(csv.meta);
      const res = await axiosPrivate.patch("/events/" + id, {
        participants: parsedData,
      });
      setData(res.data.participants);
    };
    reader.readAsText(file);
  };

  function exportPdf() {
    var pdf = new jsPDF("l", "px", [canvas.width, canvas.height]);
    pdf.addImage(
      document.getElementById("canvas").toDataURL({ pixelRatio: 2 }),
      0,
      0,
      canvas.width,
      canvas.height
    );
    pdf.save("canvas.pdf");
  }

  const handleDownload = async () => {
    var jsonTemplate = JSON.stringify(canvas);
    console.log(jsonTemplate);

    data.forEach((participant) => {
      let json = jsonTemplate.replaceAll("{{name}}", participant.name);
      canvas.clear();

      canvas.loadFromJSON(json, function() {
        canvas.renderAll();
        exportPdf();
        canvas.clear();
      });
    });

    canvas.loadFromJSON(jsonTemplate, function() {
      canvas.renderAll();
    });
  };

  return (
    <>
      <div className="flex m-8 justify-center">
        <div>
          <img
            className="rounded-[10px] w-[500px]"
            src={eventDetails.image}
            alt="na"
          />
        </div>
        <div className="w-[40%] ml-8">
          <h1 className="text-[100px]">{eventDetails.name}</h1>
          <p className="text-2xl">{eventDetails.description}</p>
        </div>
      </div>
      <div className="mt-[100px]">
        <h1 className="text-[40px] text-center">
          Create A Certificate Template:
        </h1>
        <EditorCertificate />
      </div>
      <>
        <Save id={id} />
      </>
      <div className="flex justify-center m-8">
        <div className="">
          <h1 className="text-[40px] text-center mt-8">Participants</h1>
          <div class="flex justify-center">
            <div class="mb-3 w-96">
              <label
                for="formFile"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Choose A CSV File :
              </label>
              <input
                onChange={handleFileChange}
                className="form-control block w-full px-2 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file"
                id="formFile"
              />
            </div>
          </div>
          <div className="w-fit mx-auto">
            <button
              className="text-center text-white font-bold rounded py-2 m-2 w-[80px] focus:outline-none bg-blue-700 border-2 border-indigo-400"
              onClick={handleSubmit}
            >
              Add
            </button>
            <button
              className="text-center text-white font-bold rounded py-2 m-2 w-[80px] focus:outline-none bg-blue-700 border-2 border-indigo-400"
              onClick={handleDownload}
            >
              Download
            </button>
          </div>
        </div>
        <div>
          <p className="m-4">or</p>
        </div>
        <div className="bg-green-100 p-4 m-6">
          <p className="m-2">Copy Invitation Link</p>
          <CopyToClip copyText={"http://localhost:3000/event/join/" + id} />
        </div>
      </div>

      <button
        className="m-3"
        onClick={async (e) => {
          e.target.innerHTML = "Refreshing..";
          const res = await axiosPrivate.get("/events/" + id);
          setData(res.data.participants);
          e.target.innerHTML = "Refresh";
        }}
      >
        Refresh
      </button>
      <div>
        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((participant) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6">{participant.name}</td>
                    <td class="py-4 px-6">{participant.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10 w-1/4 text-center mx-auto">
        <p className="text-3xl m-4">Send Mails To Everyone:</p>
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Alert: </strong>
          <span class="block sm:inline">
            If emails are send, event will be marked as complete and no actions
            will be allowed further, be careful with it.
          </span>
        </div>
        <button
          onClick={handleSendMail}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"
        >
          Send Mails To Participants
        </button>
      </div>
    </>
  );
};

export default EventDetails;