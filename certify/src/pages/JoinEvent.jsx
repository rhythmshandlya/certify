import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { axiosPrivate } from "../api/axios";
import city from "./cityNames";

const EventForm = ({ eventDetails, setEventDetails }) => {
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Ananya Garg"
            value={eventDetails.name}
            onChange={(e) => {
              setEventDetails({ ...eventDetails, name: e.target.value });
            }}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="armaanbgp@gmail.com"
            value={eventDetails.email}
            onChange={(e) => {
              setEventDetails({ ...eventDetails, email: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Tell About Yourself
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            rows={10}
            type="text"
            placeholder="Hello I am Aayush!"
            value={eventDetails.description}
            onChange={(e) => {
              setEventDetails({
                ...eventDetails,
                description: e.target.value,
              });
            }}
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
    </form>
  );
};

const JoinEvent = () => {
  const { id } = useParams();

  const [eventDetails, setEventDetails] = useState({});
  const [done, setDone] = useState(false);

  const handleClick = async () => {
    console.log("Hello");
    try {
      await axiosPrivate.patch("/events/" + id, {
        participants: [{ name: eventDetails.name, email: eventDetails.email }],
      });
      setDone(true);
    } catch (error) {
      alert("JoinEvent Error");
      console.log(error);
    }
  };

  return (
    <>
      {done ? (
        <p className="text-3xl mx-auto">Thankyou for enrolment!</p>
      ) : (
        <>
          <div className="mx-auto w-[600px]">
            <p className="m-1 mb-10">Event Id: {id}</p>
            <EventForm
              eventDetails={eventDetails}
              setEventDetails={setEventDetails}
            />
            <button onClick={handleClick}>Submit</button>
          </div>
        </>
      )}
    </>
  );
};

export default JoinEvent;
