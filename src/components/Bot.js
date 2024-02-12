// Bot.js
import React from 'react';

function Bot({ bot, onEnlist, onRelease, onDischarge, isArmyBot }) {
  const { id, name } = bot;

  const enlist = () => {
    if (isArmyBot) {
      onRelease();
    } else {
      onEnlist();
    }
  };

  const discharge = () => {
    onDischarge();
  };

  return (
    <div className="bot">
      <p>{name}</p>
      <button onClick={enlist}>{isArmyBot ? 'Release' : 'Enlist'}</button>
      {isArmyBot && <button onClick={discharge}>x</button>}
    </div>
  );
}

export default Bot;
