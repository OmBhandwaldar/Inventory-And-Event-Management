import React, { useState } from "react";

interface RequestVenueModalProps {
  selectedVenue: string;
  onRequestSuccess: () => void;
  onClose: () => void;
}

const RequestVenueModal: React.FC<RequestVenueModalProps> = ({
  selectedVenue,
  onRequestSuccess,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVenueRequest = async () => {
    setLoading(true);
    try {
      // Simulate an API request to book the venue
      const response = await fetch("/api/request-venue", {
        method: "POST",
        body: JSON.stringify({ venue: selectedVenue }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        onRequestSuccess(); // Call success handler to finalize the event addition
      } else {
        throw new Error("Venue request failed");
      }
    } catch (err) {
      // Check if the error is an instance of Error and handle it
      if (err instanceof Error) {
        setError(err.message); // Use the error message
      } else {
        setError("An unknown error occurred"); // Fallback error message
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Request Venue: {selectedVenue}</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-end">
          <button
            onClick={handleVenueRequest}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Requesting..." : "Request Venue"}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-colors ml-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestVenueModal;
