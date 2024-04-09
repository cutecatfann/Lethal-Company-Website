/**
 * Monster.jsx
 * The Monster object is passed as a prop to the component.
 * 
 * The component uses React's useState and useEffect hooks to manage state and side effects.
 * 
 * The state variables are:
 * - visibleParagraphs: An array of paragraphs that are currently visible on the screen.
 * - currentParagraphIndex: The index of the current paragraph being displayed.
 * - charIndex: The index of the current character being displayed in the current paragraph.
 * 
 * The useEffect hook is used to create a "typing" animation for the description of the monster.
 * It does this by incrementing the charIndex and currentParagraphIndex state variables over time,
 * and updating the visibleParagraphs state variable with the current state of the description.
 * 
 * The description of the monster is an array of strings, where each string is a paragraph.
 * 
 * The component returns a JSX element that displays the name, danger level, scientific name, and description of the monster,
 * as well as an image of the monster.
 */

import React, { useState, useEffect } from 'react';
import './MonsterStyles.css';

// Monster component
function Monster({ monster }) {
  // State variables, useState hook
  const [visibleParagraphs, setVisibleParagraphs] = useState([]);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [error, setError] = useState(null);

  // This prints out the characters one at a time to simulate a terminal effect
  useEffect(() => {
    try {
      // Destructure the description array from the monster object
      const paragraphs = [...monster.description];
      // Check if the current paragraph index is less than the total number of paragraphs
      if (currentParagraphIndex < paragraphs.length) {
        const paragraph = paragraphs[currentParagraphIndex];
        if (charIndex <= paragraph.length) {
          // Set a timeout to display the characters one at a time
          setTimeout(() => {
            // Update the visible paragraphs with the current paragraph and characters up to the current index
            setVisibleParagraphs(paragraphs.slice(0, currentParagraphIndex + 1).map((p, i) => {
              return i === currentParagraphIndex ? p.slice(0, charIndex) : p;
            }));
            setCharIndex(charIndex + 1);
          }, 10); // adjust the speed
        } else {
          setCharIndex(0);
          setCurrentParagraphIndex(currentParagraphIndex + 1);
        }
      }
      console.log(monster);
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  }, [charIndex, currentParagraphIndex, monster.description]);

  // Return the JSX for the Monster component
  return (
    <div className="container">
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <div className="textContainer">
            <p>{monster.name}</p>
            <p>{monster.dangerLevel}</p>
            <p>{monster.scientificName}</p>
            {visibleParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="imageContainer">
            <img src={monster.image} alt={monster.name} className="image" />
          </div>
        </>
      )}
    </div>
  );
}

export default Monster;
