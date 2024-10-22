import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AddEventModal from "../AddEventModal/AddEventModal";
import "./CalendarWithEvents.css";

interface Event {
  title: string;
  fromTime: string;
  toTime: string;
  details: string;
  venue: string;
  date: string; // Ensure the event has a date field
}

interface CalendarWithEventsProps {
  isAdmin?: boolean;
}

const CalendarWithEvents: React.FC<CalendarWithEventsProps> = ({ isAdmin }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [allEvents, setAllEvents] = useState<Event[]>([]); // Store all events
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const navigate = useNavigate();

  isAdmin = true;

  // Helper function to format the date as YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  // Function to add one day to the date
  const addOneDay = (dateString: string): string => {
    const date = new Date(dateString); // Parse the date string
    date.setDate(date.getDate() + 1); // Add one day
    return formatDate(date); // Return the formatted date string
  };

  // Fetch all events on mount
  const fetchAllEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/events");
      if (!response.ok) throw new Error(`Error fetching events: ${response.status}`);
      const data = await response.json();

      // Increment dates of events
      const incrementedEvents = data.map((event: Event) => ({
        ...event,
        date: addOneDay(event.date), // Increment event date by one day
      }));

      setAllEvents(incrementedEvents || []);
    } catch (error) {
      console.error("Error fetching all events:", error);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  // Fetch events for the selected date
  const handleDateChange = async (value: Date | Date[] | null) => {
    if (value && !Array.isArray(value)) {
      setSelectedDate(value);
      const formattedDate = formatDate(value);
      console.log("Selected Date:", formattedDate); // Log formatted date

      try {
        const response = await fetch(`http://localhost:3000/api/v1/events/${formattedDate}`);
        if (!response.ok) throw new Error(`Error fetching events for ${formattedDate}: ${response.status}`);
        const data = await response.json();

        // Format and log events
        const formattedEvents = data.map((event: Event) => ({
          ...event,
          date: addOneDay(formatDate(new Date(event.date))), // Increment event date by one day
        }));

        console.log("Formatted Events:", formattedEvents.map(event => event.date)); // Log formatted event dates
        setEvents(formattedEvents || []);
      } catch (error) {
        console.error("Error fetching events for selected date:", error);
      }
    } else {
      setSelectedDate(null);
      setEvents([]);
    }
  };

  // Add a new event and refresh the event list
  const handleAddEvent = async (newEvent: Event) => {
    if (!selectedDate) return;
    const formattedDate = formatDate(selectedDate);

    try {
      await fetch("http://localhost:3000/api/v1/events", {
        method: "POST",
        body: JSON.stringify({ ...newEvent, date: formattedDate }),
        headers: { "Content-Type": "application/json" },
      });
      fetchAllEvents(); // Refresh all events after adding a new event
      await handleDateChange(selectedDate); // Fetch events for the selected date
    } catch (error) {
      console.error("Error adding new event:", error);
    }
  };

  // Check if a date has events for highlighting
  const checkForEvents = ({ date }: { date: Date }) => {
    const formattedDate = formatDate(date); // Use the formatted date for comparison
    console.log("Comparing Date:", formattedDate); // Log for debugging
    return allEvents.some(event => event.date === formattedDate) ? "event-date" : null;
  };

  // Handle click on event to navigate to details page
  const handleEventClick = (event: Event) => {
    navigate("/event-details", { state: { event } });
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Event Calendar</h1>
      
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={checkForEvents}
        style={{ width: "100%" }} // Adjust the width of the calendar
      />

      <h2 className="text-2xl font-semibold mt-6">
        Events for {selectedDate ? selectedDate.toDateString() : "Select a date"}
      </h2>

      {events.length > 0 ? (
        <ul className="mt-4 space-y-3">
          {events.map((event, index) => (
            <li
              key={index}
              className="p-4 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors"
              onClick={() => handleEventClick(event)}
            >
              <strong>{event.title}</strong> at {event.fromTime}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4">
          <p>No events for this date.</p>
          {isAdmin && (
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
          selectedDate={selectedDate!}
        />
      )}
    </div>
  );
};

export default CalendarWithEvents;
