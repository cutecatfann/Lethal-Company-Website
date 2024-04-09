/**
 * MonsterDetails.jsx
 * 
 * This file defines a React component that displays detailed information about a specific monster.
 * The monster's name is obtained from the URL parameters using the `useParams` hook from `react-router-dom`.
 * This name is then used to find the corresponding monster data from a local JSON file (`monsters.json`).
 * 
 * The purpose of this component is to provide a detailed view for each monster in the application.
 * When a user navigates to a URL that includes a monster's name, this component is responsible for fetching
 * and displaying the monster's details. If the monster's name in the URL does not match any monster in the 
 * `monsters.json` file, a message indicating that the monster was not found is displayed instead.
 * 
 * The `Monster` component is used to display the monster's details. This component is passed the monster data
 * as a prop. The `Monster` component is responsible for how the monster's details are actually rendered.
 * 
 * The `name.replace(/-/g, ' ')` line is used to convert URL-friendly names (where spaces are replaced with hyphens)
 * back into the actual monster name (with spaces). This is necessary to match the monster's name in the JSON data.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import Monster from './Monster.jsx';
import monstersData from './monsters.json';

function MonsterDetails() {
  const { name } = useParams();
  const monsterName = name.replace(/-/g, ' ');
  const monster = monstersData.find(m => m.name.toLowerCase() === monsterName);

  return monster ? <Monster monster={monster} /> : <div>Monster not found</div>;
}

export default MonsterDetails;
