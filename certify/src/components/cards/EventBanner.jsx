import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosPrivate } from "../../api/axios";

const Banner = ({ name, description, image, id }) => {
  return (
    <div className="m-10">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xl dark:bg-gray-800 dark:border-gray-700 flex">
        <img
          className="rounded-t-lg w-[250px] h-[250px] m-6"
          src={image}
          alt=""
        />
        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {description}
          </p>
          <Link to={`/event/${id}`}>
            <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const EventBanners = () => {
  const [events, setEvent] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axiosPrivate.get("/auth/me");
        console.log(res.data.events);
        setEvent(res.data.events);
      } catch (e) {
        alert("EventBanner Error");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {events &&
        events.map((event) => {
          return (
            <Banner
              name={event.name}
              description={event.description}
              image={event.image}
              id={event.id}
            />
          );
        })}
    </div>
  );
};

export default EventBanners;
