// src/components/CalendarWithEvents/CalendarWithEvents.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarWithEvents.css'; 

const CalendarWithEvents = () => {
  // Sample events data
  const eventsData = {
    '2024-10-20': [{ title: 'Meeting with Team', time: '10:00 AM', details: 'Discuss project updates and next steps.' }],
    '2024-10-11': [{ title: 'Project Deadline', time: '5:00 PM', details: 'Submit the final project report.' }, { title: 'Gym', time: '7:00 PM', details: 'Attend yoga class.' }],
    '2024-10-22': [{ title: 'Running', time: '7:00 PM', details: 'Evening run at the park.' }],
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  
  const navigate = useNavigate(); 

  // Format date to match the events data keys (YYYY-MM-DD)
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    setEvents(eventsData[formattedDate] || []);
  };

  const checkForEvents = ({ date }) => {
    const formattedDate = formatDate(date);
    return eventsData[formattedDate] ? 'event-date' : null;
  };

  const handleEventClick = (event) => {
    navigate('/event-details', { state: { event } }); 
  };

  return (
    <div className="calendar-container">
      <h1>Event Calendar</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={checkForEvents}
      />
      
      <h2>Events for {selectedDate.toDateString()}</h2>
      {events.length > 0 ? (
        <ul>
          {events.map((event, index) => (
            <li key={index} onClick={() => handleEventClick(event)}> 
              <strong>{event.title}</strong> at {event.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>No events for this date.</p>
      )}
    </div>
  );
};

export default CalendarWithEvents;
