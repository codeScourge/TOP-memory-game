import React from "react";

export default function ScoreBoard({currentScore, highScore, rounds}) {
    return  <div className="scoreboard">
                <h3 className="scoreboard__title">SCOREBOARD</h3>
                <h5 className="scoreboard__score">current score: {currentScore}</h5>
                <h5 className="scoreboard__score">highest score: {highScore}</h5>
                <h5 className="scoreboard__score">current round: {rounds}</h5>
            </div>
}
