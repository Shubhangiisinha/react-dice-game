import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dice Game</h1>
        <div className="dice" onClick={rollDice}>
          {diceNumber}
        </div>
        <button onClick={rollDice}>Roll the Dice</button>
      </header>
    </div>
  );
};

export default App;