import { useState } from 'react'
import './App.css'

function App() {
  
  const handleClick = () => {
    alert("Button Clicked!")
  };

  return (
    <div className="Guess Who's Coming">
      <h1>Guess Who's Coming To Dinner</h1>
      <button onClick={handleClick}>Start Game</button>
    </div>
  )
}

export default App
