import React from 'react';

function Bot({ bot, isArmyBot, enlistBot, releaseBot, dischargeBot }) {
  const enlist = () => {
    if (!isArmyBot) {
      enlistBot(bot);
    } else {
      releaseBot(bot);
    }
  };

  const discharge = () => {
    dischargeBot(bot);
  };
 
  return (
    <div className="bot">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <button onClick={enlist}>{isArmyBot ? 'Release' : 'Enlist'}</button>
      {isArmyBot && <button onClick={discharge}>x</button>}
    </div>
  );
}

export default Bot;
