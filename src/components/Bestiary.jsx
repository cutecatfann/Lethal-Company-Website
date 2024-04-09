/**
 * Bestiary.jsx
 * 
 * This file defines a React component that renders a bestiary, or a catalog of monsters, in a table format. 
 * The bestiary is divided into three categories: Indoor, Outdoor, and Daytime monsters. Each category is 
 * represented as a separate table. The purpose of this component is to provide an organized, visual representation 
 * of the game's monsters, making it easier for players to understand the characteristics and behaviors of each monster.
 * 
 * The file begins by importing necessary dependencies. It then defines a styles object to provide CSS for the tables.
 * 
 * Following this, three separate arrays are defined to hold the data for each category of monsters. Each array contains 
 * objects, where each object represents a monster and its properties. These properties include the monster's name, 
 * shovelHP, powerLevel, maxSpawned, stunnable, stunMultiplier, damage, doorOpenSpeed, and favorite. This data is 
 * hard-coded into the file for simplicity, but in a more complex application, it could be fetched from an API or a database.
 * 
 * The `renderTable` function is then defined. This function takes in an array of monster data and a title as parameters, 
 * and returns a table that displays the data. The table includes a header row with the names of the properties, and each 
 * subsequent row represents a monster. The monster's name is displayed as a link that leads to a detailed page about the monster.
 * 
 * The `BestiaryTable` function is the main component exported from this file. It uses the `renderTable` function to render 
 * three tables, one for each category of monsters. The tables are displayed within a div, which is styled using the 
 * styles object defined earlier.
 * 
 * This component is designed to be reusable and maintainable. If more categories of monsters are added in the future, 
 * they can easily be included by adding a new array of data and a new call to `renderTable` in the `BestiaryTable` function.
 */

import React from 'react';
import { Link } from 'react-router-dom'; 

// styles for the table
const styles = {
  tableContainer: {
    margin: '100px',
    width: '80%',
    padding: '30px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
    th: {
        backgroundColor: '#000',
        color: '#0F0',
        padding: '10px'
    },
};

// data for the table, includes all indoor monsters here
const bestiaryDataIndoor = [
  { name: 'Snare Flea', shovelHP: 2, powerLevel: 1, maxSpawned: 4, stunnable: 'Yes', stunMultiplier: 3.0, damage: 10, doorOpenSpeed: '4.3s', favorite: '220-As' },
  { name: 'Bunker Spider', shovelHP: 5, powerLevel: 3, maxSpawned: 1, stunnable: 'Yes', stunMultiplier: 1.0, damage: 90, doorOpenSpeed: '6.7s', favorite: '41-Experi' },
  { name: 'Hoarding Bug', shovelHP: 2, powerLevel: 1, maxSpawned: 8, stunnable: 'Yes', stunMultiplier: 0.5, damage: 30, doorOpenSpeed: '0.7s', favorite: '220-As' },
  { name: 'Braken', shovelHP: 3, powerLevel: 3, maxSpawned: 1, stunnable: 'Yes', stunMultiplier: 0.25, damage: 'Instant Kill', doorOpenSpeed: '0.8s', favorite: '56-Vov' },
  { name: 'Thumper', shovelHP: 4, powerLevel: 3, maxSpawned: 4, stunnable: 'Yes', stunMultiplier: 1.0, damage: 40, doorOpenSpeed: '3.3s', favorite: '21-Off' },
  { name: 'Hygrodere', shovelHP: 'Immune', powerLevel: 1, maxSpawned: 2, stunnable: 'Yes', stunMultiplier: 4.0, damage: 35, doorOpenSpeed: 'Incapable', favorite: '21-Off' },
  { name: 'Ghost Girl', shovelHP: 'Immune', powerLevel: 2, maxSpawned: 1, stunnable: 'No', stunMultiplier: '-', damage: 'Instant Kill', doorOpenSpeed: '0.7s', favorite: '85-Ren' },
  { name: 'Spore Lizard', shovelHP: 'Immune', powerLevel: 1, maxSpawned: 2, stunnable: 'Yes', stunMultiplier: 0.6, damage: 20, doorOpenSpeed: '3.3s', favorite: '41-Experi' },
  { name: 'Nutcracker', shovelHP: 5, powerLevel: 1, maxSpawned: 10, stunnable: 'Yes', stunMultiplier: 0.5, damage: 'Varies', doorOpenSpeed: '0.5s', favorite: '85-Ren' },
  { name: 'Coil Head', shovelHP: 'Immune', powerLevel: 1, maxSpawned: 5, stunnable: 'Yes', stunMultiplier: 3.25, damage: 90, doorOpenSpeed: '16.7s', favorite: '21-Off' },
  { name: 'Jester', shovelHP: 'Immune', powerLevel: 3, maxSpawned: 1, stunnable: 'Yes', stunMultiplier: 0.6, damage: 'Instant Kill', doorOpenSpeed: '2s', favorite: '85-Ren' },
  { name: 'Masked', shovelHP: 4, powerLevel: 1, maxSpawned: 10, stunnable: 'Yes', stunMultiplier: 0.75, damage: 'Instant Kill', doorOpenSpeed: '0.5s', favorite: '85-Ren' },
];

// data for the table, includes all outdoor monsters here
const bestiaryDataOutdoor = [
  { name: 'Eyeless Dog', shovelHP: 12, powerLevel: 2, maxSpawned: 8, stunnable: 'Yes', stunMultiplier: 0.7, damage: 'Instant Kill', favorite: '8-Titan' },
  { name: 'Forest Keeper', shovelHP: 30, powerLevel: 3, maxSpawned: 3, stunnable: 'Yes', stunMultiplier: 1.2, damage: 'Instant Kill', favorite: '56-Vow' },
  { name: 'Earth Leviathan', shovelHP: 'Immune', powerLevel: 2, maxSpawned: 3, stunnable: 'No', stunMultiplier: '-', damage: 'Instant Kill', favorite: '220-Assurance' },
  { name: 'Baboon Hawk', shovelHP: 6, powerLevel: 1, maxSpawned: 15, stunnable: 'Yes', stunMultiplier: 0.4, damage: 30, favorite: '61-March' },
];

// data for the table, includes all daytime monsters here
const bestiaryDataDaytime = [
  { name: 'Circuit Bee', shovelHP: 'Immune', powerLevel: 1, maxSpawned: 6, stunnable: 'No', stunMultiplier: '-', damage: 10, favorite: '61-March' },
  { name: 'Manticoil', shovelHP: 1, powerLevel: 1, maxSpawned: 16, stunnable: 'Yes', stunMultiplier: 1.0, damage: '-', favorite: '21-Offense' },
  { name: 'Roaming Locust', shovelHP: 'Immune', powerLevel: 1, maxSpawned: 5, stunnable: 'No', stunMultiplier: '-', damage: '-', favorite: '41-Experimentation' },
];

// function to render the table
const renderTable = (data, title) => {
  try {
    return (
      <div>
        {/* gets the title for the table */}
        <p><strong>{title}</strong></p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Shovel HP</th>
              <th>Power Level</th>
              <th>Max Spawned</th>
              <th>Stunnable</th>
              <th>Stun Multiplier</th>
              <th>Damage</th>
              <th>Door Open Speed</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {/* maps through the data and creates a row for each monster */}
            {data.map((monster, index) => {
              // creates a URL-friendly version of the monster name
              const monsterNameInUrl = monster.name.toLowerCase().replace(/ /g, '-');
              return (
                <tr key={index}>
                  {/* sets the url in the dom */}
                  <td><Link to={`/bestiary/${monsterNameInUrl}`}>{monster.name}</Link></td>
                  <td>{monster.shovelHP}</td>
                  <td>{monster.powerLevel}</td>
                  <td>{monster.maxSpawned}</td>
                  <td>{monster.stunnable}</td>
                  <td>{monster.stunMultiplier}</td>
                  <td>{monster.damage}</td>
                  <td>{monster.doorOpenSpeed}</td>
                  <td>{monster.favorite}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } catch (error) {
    console.error(`Error rendering table: ${error}`);
    return <div>Error rendering table. Please try again later.</div>;
  }
};

// function to render the table
const BestiaryTable = () => {
  try {
    return (
      <div style={styles.tableContainer}>
        {/* renders the tables for each category */}
        {renderTable(bestiaryDataIndoor, "Indoor Bestiary")}
        {renderTable(bestiaryDataOutdoor, "Outdoor Bestiary")}
        {renderTable(bestiaryDataDaytime, "Daytime Bestiary")}
      </div>
    );
  } catch (error) {
    console.error(`Error rendering BestiaryTable: ${error}`);
    return <div>Error loading bestiary. Please try again later.</div>;
  }
};
export default BestiaryTable;
