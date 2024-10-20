import React from 'react';
import CalendarWithEvents from '../CalendarWithEvents/CalendarWithEvents';

const AdminView: React.FC = () => {
  console.log("AdminView component rendered");
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <CalendarWithEvents />
    </div>
  );
};

export default AdminView;
