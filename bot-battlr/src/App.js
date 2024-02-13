import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './index.css';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
// fetch data when the component mounts
useEffect(() => {
  fetch('http://localhost:8001/bots')
  .then(response => response.json())
  .then((data) => {setBots(data)});

  }, []);

  const enlistBot = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
  };

  const releaseBot = (bot) => {
    setEnlistedBots(setEnlistedBots.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = async (botId) => {
    try {
      await fetch(`http://localhost:8001/bots/${botId}`, {
        method: 'DELETE'
      });
      setEnlistedBots(enlistedBots.filter((b) => b.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div className="App">
      <h1>Galactic Web App</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={ dischargeBot}
      />
    </div>
  );
}

export default App;
