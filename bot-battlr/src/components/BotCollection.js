import React from 'react';
import Bot from './Bot';

function BotCollection({ bots, enlistBot, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map((bot) => (
          <Bot key={bot.id} bot={bot} enlistBot={() => enlistBot(bot)} releaseBot={()=> releaseBot(bot)} dischargeBot={()=>dischargeBot(bot.id)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
