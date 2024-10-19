// src/components/AddEventModal.jsx
import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './AddEventModal.css'; // Optional: Add your styles

const AddEventModal = ({ onAddEvent, onClose }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({ title, time, details });
    onClose();
  };

  return (
    <div className="add-event-modal">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Details:</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button type="submit">Add Event</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};


AddEventModal.propTypes = {
  onAddEvent: PropTypes.func.isRequired, 
  onClose: PropTypes.func.isRequired,     
};

export default AddEventModal;
