import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import NameInput from './components/NameInput.jsx';
import List from './components/List.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import TimeOfWeekMessage from './components/TimeOfWeekMessage.jsx';
import SoundEffects from './components/SoundEffects.jsx';
import './App.css';
import BestiaryTable from './components/Bestiary.jsx';
import MonsterDetails from './components/MonsterDetails.jsx';
import TerminalScreen from './components/TerminalScreen.jsx';

function App() {
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    const handleUserAction = () => {
      setShowTerminal(false);
    };

    // Add event listeners for click and keydown events
    window.addEventListener('click', handleUserAction);
    window.addEventListener('keydown', handleUserAction);

    // Cleanup the event listeners
    return () => {
      window.removeEventListener('click', handleUserAction);
      window.removeEventListener('keydown', handleUserAction);
    };
  }, []);

  return (
    <Router>
      <SoundEffects />
      {showTerminal ? (
        <TerminalScreen />
      ) : (
        <Routes>
          <Route path="/greeting" element={
            <>
              <TimeOfWeekMessage />
              <WelcomeMessage />
              <List />
              <Link to="/bestiary">{'>>'} View Bestiary logs</Link>
            </>
          } />
          <Route path="/" element={<NameInput />} />
          <Route path="/bestiary" element={<BestiaryTable />} />
          <Route path="/bestiary/:name" element={<MonsterDetails />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
