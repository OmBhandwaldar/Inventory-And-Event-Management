import React, { useState, useEffect } from "react";

interface Venue {
  name: string;
  type: string;
  isAvailable: boolean;
}

interface VenueManagementProps {
  onSelectVenue: (venue: string) => void;
}

const VenueManagement: React.FC<VenueManagementProps> = ({ onSelectVenue }) => {
  const [venues, setVenues] = useState<Venue[]>([]);

  useEffect(() => {
    // Fetch available venues from the backend
    const fetchVenues = async () => {
      const response = await fetch("http://localhost:3000/api/v1/venues");
      const data = await response.json();
      setVenues(data);
    };

    fetchVenues();
  }, []);

  console.log("venues")
  console.log(venues)
  console.log("venues")

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Available Venues</h2>
      <ul>
        {venues.map((venue, index) => (
          <li
            key={index}
            className={`p-4 border rounded-md mb-2 ${
              venue.isAvailable ? "bg-green-100" : "bg-red-100"
            }`}
            onClick={() => venue.isAvailable && onSelectVenue(venue.name)}
          >
            {venue.name} - {venue.isAvailable ? "Available" : "Unavailable"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VenueManagement;
