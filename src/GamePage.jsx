import React, {useState} from "react";
import './GamePage.css';

function ErrorMessage({message}) {
  if (!message) return null;
  return <p style={ {color: 'red'} }>{message}</p>
}

function GamePage() {

  const [inputValue, setInputValue] = useState('');
  const [names, setNames] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [error, setError] = useState('');
  const [isCrossedOut, setIsCrossedOut] = useState({});
  
  const handlePass = () => {
    if (!inputValue.trim()) {
      setError("Please enter a name!");
      return;
    }
    setNames([...names, inputValue]);
    setInputValue('');
    setError('');
  };

  const handleFinish = () => {
    if (names.length == 0 && !inputValue.trim()) {
      setError("Please enter a name!");
      return;
    }
    if (inputValue.trim()) {
      setNames([...names, inputValue]);
      setInputValue('');
    }
    setError('');
    setIsFinished(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError(false);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handlePass();
    }
  };
  
  function handleCrossedOut(index) {
    setIsCrossedOut({
      ...isCrossedOut,
      [index]: !isCrossedOut[index]      
    });
  }

  return (
    <div>
      {!isFinished ? (
        <>
          <h1>Who's Your Guest?</h1>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Who's Coming?"
            onKeyDown={handleKeyDown}
          />
          <button onClick={handlePass}>Pass</button>
          <button onClick={handleFinish}>Finish</button>

          <ErrorMessage message={error ? "Please enter a name!" : ""}/>
        </>
      ) : (
        <>
           <h2 >Guest List:</h2>
          <ol>
            {names.map((name, index) => (
              <li 
                className="hover-text"
                key = {index}
                onClick={() => handleCrossedOut(index)}
                style={{
                  textDecoration: isCrossedOut[index] ? "line-through" : "none",
                  opacity: isCrossedOut[index] ? 0.3 : 1
                }}
              >{name}</li>
            ))}
          </ol>
          <button onClick={() => setIsFinished(false)}>Back</button>
          <button onClick={() => setNames([])}>Clear List</button>
        </>
      )}
    </div>
  );
}

export default GamePage;