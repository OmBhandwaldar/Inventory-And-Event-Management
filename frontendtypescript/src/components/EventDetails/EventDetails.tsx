import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Event {
  title: string;
  fromTime: string;
  toTime: string;
  details: string;
}

const EventDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const event = location.state?.event as Event;

  const handleClose = () => {
    navigate("/");
  };

  if (!event) {
    return <p>No event details available.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border border-gray-300 p-5 rounded-lg max-w-lg w-full mx-auto relative shadow-lg">
        <img
          src="https://via.placeholder.com/400x200.png?text=Event+Image" // Dummy image URL
          alt="Event"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{event.title}</h2>
        <p className="mb-1 text-gray-600">From: {event.fromTime}</p>
        <p className="mb-1 text-gray-600">To: {event.toTime}</p>
        <p className="mb-4 text-gray-600">Details: {event.details}</p>
        <button
          onClick={handleClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
