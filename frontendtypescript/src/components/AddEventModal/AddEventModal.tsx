import React, { useState } from "react";
import VenueManagement from "../VenueManagement/VenueManagement";

const AddEventModal: React.FC<AddEventModalProps> = ({ onAddEvent, onClose, selectedDate }) => {
  const [title, setTitle] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [details, setDetails] = useState("");
  const [venue, setVenue] = useState("");
  const [showVenueManagement, setShowVenueManagement] = useState(false);

  const handleVenueRequest = (requestedVenue: string) => {
    setVenue(requestedVenue);
    setShowVenueManagement(false);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddEvent({ title, fromTime, toTime, details, venue });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Add Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">From Time:</label>
            <input
              type="text"
              value={fromTime}
              onChange={(e) => setFromTime(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">To Time:</label>
            <input
              type="text"
              value={toTime}
              onChange={(e) => setToTime(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Details:</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Select Venue:</label>
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Select a venue"
              required
              readOnly
            />
            <button
              type="button"
              onClick={() => setShowVenueManagement(true)}
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
            >
              Request Venue
            </button>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mr-2"
            >
              Add Event
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>

        {showVenueManagement && <VenueManagement onSelectVenue={handleVenueRequest} />}
      </div>
    </div>
  );
};

export default AddEventModal;
