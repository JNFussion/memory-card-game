import React, { useState } from "react";
import Board from "./board";
import ScoreBoard from "./scoreBoard";

const Game = function Game(props) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <section>
      <ScoreBoard score={score} />
      <Board setScore={setScore} />
    </section>
  );
};

export default Game;
