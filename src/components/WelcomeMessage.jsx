/**
 * WelcomeMessage.jsx
 * 
 * This is a React functional component that displays a welcome message to the user.
 * It uses the `useLocation` hook from `react-router-dom` to access the current location object.
 * The location object's state property is destructured to get the `name` and `role` of the user.
 * If the state property is not available (i.e., the user navigated to this component without passing state),
 * default values 'NOT AVAILABLE' for name and 'NOT SPECIFIED' for role are used.
 * 
 * The component is exported as a default export, so it can be imported with any name in other files.
 */

import React from 'react';
import { useLocation } from 'react-router-dom';

const WelcomeMessage = () => {
  const location = useLocation();
  let name, role;

  try {
    ({ name = 'NOT AVAILABLE', role = 'NOT SPECIFIED' } = location.state || {});
  } catch (error) {
    console.error(`Error retrieving location state: ${error}`);
    name = 'NOT AVAILABLE';
    role = 'NOT SPECIFIED';
  }

  return (
    <div className='WelcomeMessage'>
      <p>{'>>'} Welcome, {name}!</p>
      <p>{'>>'} Your role is: {role}</p>
    </div>
  );
};

export default WelcomeMessage;
