// AdminView.tsx
import React from 'react';
import CalendarWithEvents from '../CalendarWithEvents/CalendarWithEvents';

interface AdminViewProps {
  title?: string; // Optional title prop
}

const AdminView: React.FC<AdminViewProps> = ({ title = "Admin Dashboard" }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <CalendarWithEvents isAdmin={true} /> {/* Pass isAdmin prop */}
    </div>
  );
};

export default AdminView;
