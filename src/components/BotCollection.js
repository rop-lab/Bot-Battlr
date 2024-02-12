// BotCollection.js
import React, { useState, useEffect } from 'react';
import Bot from './Bot';

function BotCollection({ bots, enlistBot }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map(bot => (
          <Bot key={bot.id} bot={bot} onEnlist={() => enlistBot(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
