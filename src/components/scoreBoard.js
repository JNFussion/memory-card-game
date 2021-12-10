import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "../styles/scoreBoard.css";

const ScoreBoard = function ScoreBoard({ score }) {
  const [bestScore, setBestScore] = useState(score);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return (
    <article className="scoreBoard">
      <div className="score-container">
        <span className="label">Score :</span>
        <span className="score">{score}</span>
      </div>
      <div className="score-container">
        <span className="label">Best Score :</span>
        <span className="score">{bestScore}</span>
      </div>
    </article>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreBoard;
