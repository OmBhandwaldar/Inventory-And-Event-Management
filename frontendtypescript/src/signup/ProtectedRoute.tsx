// import { Navigate } from "react-router-dom";

// Helper function to check if token exists
const isAuthenticated = () => {
  console.log("Token is being Authenticated ");
  const token = localStorage.getItem("token");
  console.log(token);

  if (!token) {
    return false;
  }
  console.log(token);
  return token; // Check if token exists and is valid
};

// Protected Route component
// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   // If not authenticated, redirect to login page
//   if (!isAuthenticated()) {
//     return <Navigate to="/login" replace />;
//   }

//   // If authenticated, allow access to the child component (protected route)
//   return children;
// };

export default isAuthenticated;
