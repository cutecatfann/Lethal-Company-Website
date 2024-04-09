import React, { useState, useRef } from 'react';
import lethalCompanyDance from '../assets/pic/lethal-company-lethal-company-dance.gif';
import theCompanyAudio from  '../assets/audio/theCompany.mp4';

const List = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const audioRef = useRef(null);

  const handleClick = (item, image, startTime, endTime) => {
    try {
      // Check if the item is already selected
      const existingItem = selectedItems.find(i => i.item === item);
      if (existingItem) {
        // If the item is already selected, remove it from the selected items
        setSelectedItems(prevItems => prevItems.filter(i => i.item !== item));
      } else {
        // If the item is not selected, add it to the selected items and play the audio clip
        setSelectedItems(prevItems => [...prevItems, { item, image, startTime, endTime }]);
        audioRef.current.currentTime = startTime;
        audioRef.current.play();
        audioRef.current.ontimeupdate = () => {
          if (audioRef.current.currentTime > endTime) {
            audioRef.current.pause();
            audioRef.current.ontimeupdate = null;
          }
        };
      }
    } catch (error) {
      console.error(`Error handling click event: ${error}`);
    }
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleClick("Your handwork is invaluable to the Company", lethalCompanyDance, 6.5, 9)}>Your handwork is invaluable to the Company</li>
        <li onClick={() => handleClick("Your work keeps the Company happy", lethalCompanyDance, 0, 2)}>Your work keeps the Company happy</li>
        <li onClick={() => handleClick("We value your commitment", lethalCompanyDance, 2, 3.8)}>We value your commitment</li>
      </ul>
      <div className="card-container">
        {selectedItems.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.item}</h2>
            <img src={item.image} alt={item.item} />
          </div>
        ))}
      </div>
      <audio ref={audioRef} src={theCompanyAudio} />
    </div>
  );
};

export default List;
