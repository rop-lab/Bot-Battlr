import React from 'react';

function Bot({ bot, enlistBot, releaseBot, dischargeBot }) {
 
  return (
    <div className="bot">
      <h1>{bot.name}</h1>
      <img src={bot.avatar_url} alt={ `${bot.name}`} />
      <button onClick={()=>enlistBot(bot)}> enlist Bot </button>
      <button onClick={()=>releaseBot(bot)}> Release Bot</button>
      <button onClick={()=>dischargeBot(bot.id)} > Discharge Bot </button>
    </div>
  );
}

export default Bot;
