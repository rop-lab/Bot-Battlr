// BotProfile.js
import React from 'react';

function BotProfile({ bot }) {
  return (
    <div>
      <h2>{bot.name}</h2>
      <p>ID: {bot.id}</p>
      <p>Model: {bot.model}</p>
      {/* Add more details */}
    </div>
  );
}

export default BotProfile;
