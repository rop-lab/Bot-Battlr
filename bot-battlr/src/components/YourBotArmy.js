import React from 'react';
import Bot from './Bot';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="your-bot-army">
        {army.map(bot => (
          <Bot
            key={bot.id}
            bot={bot}
            onRelease={() => releaseBot(bot)}
            onDischarge={() => dischargeBot(bot.id)}
            isArmyBot
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
