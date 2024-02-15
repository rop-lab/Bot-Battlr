import React from 'react';
import Bot from './Bot';

function YourBotArmy({ enlistedBots, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div >
        {enlistedBots.map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            releaseBot={() => releaseBot(bot)}
            dischargeBot={() => dischargeBot(bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
