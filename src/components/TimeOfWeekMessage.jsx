/**
 * TimeOfWeekMessage.jsx
 * 
 * The component uses JavaScript's built-in Date object to get the current day 
 * of the week as a numerical index (0 for Sunday, 1 for Monday, etc.). It then 
 * uses this index to select the corresponding day name from an array of day 
 * names. This day name is then included in the greeting message that is 
 * returned by the component.
 * 
 * The component is exported as a default export, allowing it to be imported 
 * with any name in other parts of the application.
 */

import React from 'react';

const TimeOfWeekMessage = () => {
  function dayOfWeekMessage() {
    try {
      const date = new Date();
      const dayIndex = date.getDay();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      if (dayIndex >= 0 && dayIndex <= 6) {
        return days[dayIndex];
      } else {
        throw new Error('Invalid day index');
      }
    } catch (error) {
      console.error(`Error getting day of week: ${error}`);
      return 'this day';
    }
  }

  return (
    <p>{'>>'} Happy {dayOfWeekMessage()}!</p>
  );
};

export default TimeOfWeekMessage;
