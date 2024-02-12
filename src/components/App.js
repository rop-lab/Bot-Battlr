// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/bots');
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const enlistBot = bot => {
    setArmy([...army, bot]);
  };

  const releaseBot = bot => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = async botId => {
    try {
      await fetch(`http://localhost:8001/bots/${botId}`, {
        method: 'DELETE'
      });
      setArmy(army.filter(b => b.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div className="App">
      <h1>Galactic Web App</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default App;
