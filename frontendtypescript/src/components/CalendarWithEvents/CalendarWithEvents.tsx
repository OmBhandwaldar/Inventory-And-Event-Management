// CalendarWithEvents.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AddEventModal from "../AddEventModal/AddEventModal";
import './CalendarWithEvents.css'; // Ensure to import the CSS file

interface Event {
  title: string;
  time: string;
  details: string;
}

interface CalendarWithEventsProps {
  isAdmin?: boolean; // New prop to indicate if user is admin
}

const eventsDataInitial: Record<string, Event[]> = {
  "2024-10-20": [
    {
      title: "Meeting with Team",
      time: "10:00 AM",
      details: "Discuss project updates and next steps.",
    },
  ],
  "2024-10-11": [
    {
      title: "Project Deadline",
      time: "5:00 PM",
      details: "Submit the final project report.",
    },
    { title: "Gym", time: "7:00 PM", details: "Attend yoga class." },
  ],
  "2024-10-22": [
    {
      title: "Running",
      time: "7:00 PM",
      details: "Evening run at the park.",
    },
  ],
};

const CalendarWithEvents: React.FC<CalendarWithEventsProps> = ({ isAdmin }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const navigate = useNavigate();

  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    setEvents(eventsDataInitial[formattedDate] || []);
  };

  const checkForEvents = ({ date }: { date: Date }) => {
    const formattedDate = formatDate(date);
    return eventsDataInitial[formattedDate] ? "event-date" : null;
  };

  const handleEventClick = (event: Event) => {
    navigate("/event-details", { state: { event } });
  };

  const handleAddEvent = (newEvent: Event) => {
    const formattedDate = formatDate(selectedDate);
    const updatedEvents = [
      ...(eventsDataInitial[formattedDate] || []),
      newEvent,
    ];
    eventsDataInitial[formattedDate] = updatedEvents;
    setEvents(updatedEvents);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Event Calendar</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={checkForEvents} // Apply class for event dates
        className="w-full max-w-full border-none"
      />
      <h2 className="text-2xl font-semibold mt-6">
        Events for {selectedDate.toDateString()}
      </h2>
      {events.length > 0 ? (
        <ul className="mt-4 space-y-3">
          {events.map((event, index) => (
            <li
              key={index}
              className="p-4 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors"
              onClick={() => handleEventClick(event)}
            >
              <strong>{event.title}</strong> at {event.time}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4">
          <p>No events for this date.</p>
          {isAdmin && ( // Show the button only for admin
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => setShowAddEventModal(true)}
            >
              Add Event
            </button>
          )}
        </div>
      )}

      {showAddEventModal && (
        <AddEventModal
          onAddEvent={handleAddEvent}
          onClose={() => setShowAddEventModal(false)}
          selectedDate={selectedDate} // Pass selectedDate here
        />
      )}

    </div>
  );
};

export default CalendarWithEvents;
