import React, { useState } from "react";
import Board from "./board";

const Game = function Game(props) {
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(3);

  return (
    <section>
      <Board setScore={setScore} setLife={setLife} />

      <div>Score: {score}</div>
      <div>Life: {life}</div>
    </section>
  );
};

export default Game;
