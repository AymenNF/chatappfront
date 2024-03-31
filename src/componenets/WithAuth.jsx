import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  // Your authentication logic here (e.g., check if the user is logged in)
  const isAuthenticated = !!localStorage.getItem('connectedUser'); // Check if the token exists

  // If the user is authenticated, render the Component, otherwise redirect to the login page
  return isAuthenticated ? <Component /> : <Navigate to="/Login" />;
};



export default withAuth;
