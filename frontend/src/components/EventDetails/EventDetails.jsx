// src/components/EventDetails/EventDetails.jsx
import { useLocation, useNavigate } from "react-router-dom";
import "./EventDetails.css";

const EventDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const event = location.state?.event;

  const handleClose = () => {
    navigate("/");
  };

  if (!event) {
    return <p>No event details available.</p>;
  }

  return (
    <div className="event-details-modal">
      <h2>{event.title}</h2>
      <p>Time: {event.time}</p>
      <p>Details: {event.details}</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default EventDetails;
