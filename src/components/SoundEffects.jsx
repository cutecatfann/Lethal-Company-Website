/**
 * SoundEffects.jsx
 * 
 * This is a React functional component that plays different sound effects in response to user actions.
 * It uses the useEffect hook to add event listeners to the document for 'keydown' and 'click' events.
 * 
 * When a 'keydown' event is triggered, it plays a mechanical keyboard sound, simulating the sound of typing on a mechanical keyboard.
 * When a 'click' event is triggered, it plays a mouse click sound, simulating the sound of clicking a mouse button.
 * 
 * The sound files are imported from the '../assets/audio/' directory.
 * 
 * The event listeners are removed when the component is unmounted to prevent memory leaks and unnecessary processing.
 * This is done in the cleanup function returned by the useEffect hook.
 * 
 * The component returns null because it does not render anything to the DOM. Its sole purpose is to play sound effects in response to user actions.
 */

import React, { useEffect } from 'react';

import mouseClick from '../assets/audio/mouse-click-153941.mp3';
import mechKeyboard from '../assets/audio/mech-keyboard-02-102918.mp3';

const SoundEffects = () => {
  useEffect(() => {
    // play the mechanical keyboard sound
    const playTypeSound = () => {
      const audio = new Audio(mechKeyboard);
      audio.play();
    };

    // play the mouse click sound
    const playClickSound = () => {
      const audio = new Audio(mouseClick); 
      audio.play();
    };

    // add event listeners for keydown and click events
    document.addEventListener('keydown', playTypeSound);
    document.addEventListener('click', playClickSound);

    return () => {
      document.removeEventListener('keydown', playTypeSound);
      document.removeEventListener('click', playClickSound);
    };
  }, []);

  return null; 
};

export default SoundEffects;
