import React from "react";
import { Link } from "react-router-dom";
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className="center-container">
      <h1 class="josefin-sans-header">Guess Who's Coming to Dinner!</h1>
      <Link to="/play">
        <button class="button">Start Game</button>
      </Link>
    </div>
  );
}

export default HomePage;
