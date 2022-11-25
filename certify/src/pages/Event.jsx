import React from "react";
import { useParams } from "react-router-dom";
import EventDetails from "../components/eventComponents/EventDetails";

const Event = () => {
  const { id } = useParams();
  return (
    <div>
      <EventDetails id={id} />
    </div>
  );
};

export default Event;
