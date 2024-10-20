import React from 'react';
import CalendarWithEvents from '../CalendarWithEvents/CalendarWithEvents';

interface UserViewProps {
  title?: string; // Optional title prop
}

const UserView: React.FC<UserViewProps> = ({ title = "User Dashboard" }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <CalendarWithEvents />
    </div>
  );
};

export default UserView;
