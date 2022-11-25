import React, { useRef, useState } from "react";
import { axiosPrivate } from "../api/axios";
import EventBanners from "../components/cards/EventBanner";
import EventForm from "../components/forms/EventForm";
import Sidebar from "../components/layout/Sidebar";

const Modal = () => {
  const modalRef = useRef();
  const [eventDetails, setEventDetails] = useState({});

  const handleAddEvent = () => {
    modalRef.current.classList.toggle("hidden");
  };
  const handleModalSubmit = async () => {
    console.log(eventDetails);
    try {
      const res = await axiosPrivate.post("/events", eventDetails);
      console.log(res.data);
      modalRef.current.classList.toggle("hidden");
    } catch (e) {
      alert("Something went wrong..");
    }
  };
  const handleModalDecline = () => {
    modalRef.current.classList.toggle("hidden");
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        class="bg-blue-500 hover:bg-blue-700 text-xl text-white font-bold py-2 px-6 rounded ml-10"
        onClick={handleAddEvent}
      >
        Add Event
      </button>

      {/* Main modal */}
      <div
        ref={modalRef}
        className="hidden overflow-y-auto overflow-x-hidden fixed lg:mt-36 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full max-w-2xl h-full md:h-auto mx-auto">
          {/* Modal content */}
          <div className="relative bg-[#bcbcc5] rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Event
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                dataModalToggle="defaultModal"
              >
                <svg
                  ariaHidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleModalDecline}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <EventForm
                eventDetails={eventDetails}
                setEventDetails={setEventDetails}
              />
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleModalSubmit}
              >
                Create
              </button>
              <button
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={handleModalDecline}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <div>
        <Modal />
        <br />
        <EventBanners />
        <br />
        <br />
      </div>
    </>
  );
};

export default Dashboard;
