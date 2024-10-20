import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

interface Event {
  title: string;
  time: string;
  details: string;
}

const EventDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const event = location.state?.event as Event;

  const handleClose = () => {
    navigate("/user-view");
  };

  if (!event) {
    return <p>No event details available.</p>;
  }

  return (
    <div className="bg-white border border-gray-300 p-5 rounded-lg max-w-md mx-auto relative">
      <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
      <p className="mb-1">Time: {event.time}</p>
      <p className="mb-4">Details: {event.details}</p>
      <button
        onClick={handleClose}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Close
      </button>
    </div>
  );
};

export default EventDetails;
