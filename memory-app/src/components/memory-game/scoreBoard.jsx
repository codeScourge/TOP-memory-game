import React from "react";

export default function ScoreBoard({currentScore, highScore, rounds}) {
    return  <div className="scoreboard">
                <h1 className="scoreboard__logo">
                    MySingingMonsters
                </h1>
                <div className="scoreboard__wrapper">
                    <h3 className="scoreboard__wrapper__title">SCOREBOARD</h3>
                    <h5 className="scoreboard__wrapper__score">current score: {currentScore}</h5>
                    <h5 className="scoreboard__wrapper__score">highest score: {highScore}</h5>
                    <h5 className="scoreboard__wrapper__score">current round: {rounds}</h5>
                </div>
            </div>
}
