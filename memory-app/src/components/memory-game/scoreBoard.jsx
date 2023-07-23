import React from "react";

export default function ScoreBoard({currentScore, highScore}) {
    return  <div className="scoreboard">
                <h3 className="scoreboard__title">SCOREBOARD</h3>
                <h5 className="scoreboard__score">current score: {currentScore}</h5>
                <h5 className="scoreboard__score">highest score: {highScore}</h5>
            </div>
}
