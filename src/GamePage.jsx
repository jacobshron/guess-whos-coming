import React, {useState} from "react";
import styles from './GamePage.module.css';

function ErrorMessage({message}) {
  if (!message) return null;
  return <p class="josefin-sans-error">{message}</p>
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

    let updatedNames = [...names];

    if (inputValue.trim()) {
      updatedNames = [...names, inputValue]
      setInputValue('');
    } 

    setError('');
    const shuffledNames = [...updatedNames].sort(() => Math.random() - 0.5); // Simple shuffle
    setNames(shuffledNames);
    setIsFinished(true);
    return;
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
    <div className="center-container">
      {!isFinished ? (
        <>
          <h1 class="josefin-sans-header">Who's Your Guest?</h1>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Name"
            onKeyDown={handleKeyDown}
          />

          <ErrorMessage message={error ? "Please enter a name!" : ""}/>

          <button class="button" onClick={handlePass}>Pass</button>
          <button class="button" onClick={handleFinish}>Finish</button>
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
          <button class={styles.button} onClick={() => setIsFinished(false)}>Back</button>
          <button class={styles.button} onClick={() => setNames([])}>Clear List</button>
        </>
      )}
    </div>
  );
}

export default GamePage;