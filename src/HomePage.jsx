import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Guess Who Came To Dinner!</h1>
      <Link to="/play">
        <button>Start Game</button>
      </Link>
    </div>
  );
}

export default HomePage;
