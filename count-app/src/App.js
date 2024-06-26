import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [auto, setAuto] = useState(0);
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
       setAuto(auto + 1);
    }, 1000);
  });

  return (
    <div className="App">
    <div className="App-header">
    <h1>React Count App</h1>
      <p>Press [+] Plus or [-] Minus button to check </p>
      <h1>{count}</h1>
      <button onClick={handlePlus}>[+]</button>
      <button onClick={handleMinus}>[-]</button>
      <p>Auto Count:{auto}</p>
    </div>
    
    </div>
  );
}

export default App;
