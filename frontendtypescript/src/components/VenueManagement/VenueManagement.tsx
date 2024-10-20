import React, { useState } from "react";

interface Venue {
  name: string;
  type: string;
  isAvailable: boolean;
}

const dummyVenues: Venue[] = [
  { name: "Classroom A", type: "Classroom", isAvailable: true },
  { name: "Classroom B", type: "Classroom", isAvailable: false },
  { name: "Lab 1", type: "Lab", isAvailable: true },
  { name: "Seminar Hall", type: "Seminar Hall", isAvailable: false },
  { name: "Auditorium", type: "Auditorium", isAvailable: true },
];

const VenueManagement: React.FC<{ onSelectVenue: (venue: string) => void }> = ({ onSelectVenue }) => {
  const [sortedByAvailability, setSortedByAvailability] = useState(false);

  const handleSortByAvailability = () => {
    setSortedByAvailability(!sortedByAvailability);
  };

  const availableVenues = dummyVenues.filter((venue) => venue.isAvailable);
  const sortedVenues = sortedByAvailability ? availableVenues : dummyVenues;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Venue Management</h2>
      <button onClick={handleSortByAvailability} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
        {sortedByAvailability ? "Show All Venues" : "Show Available Venues"}
      </button>

      <ul className="space-y-2">
        {sortedVenues.map((venue, index) => (
          <li key={index} className={`p-4 ${venue.isAvailable ? "bg-green-100" : "bg-red-100"} rounded-md`}>
            <span>{venue.name} ({venue.type})</span>
            {venue.isAvailable ? (
              <button
                onClick={() => onSelectVenue(venue.name)}
                className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Request This Venue
              </button>
            ) : (
              <span className="ml-4 text-red-500">Occupied</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VenueManagement;
