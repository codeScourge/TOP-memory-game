import React, {useEffect, useState} from "react";
import ImageCard from "./components/memory-game/imageCard";

const nImages = 3;

export default function Application() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [rounds, setRounds] = useState(0);

    function incrementScore() {
        setScore(score + 1);
    };

    function resetScore() {
        setScore(0);
        setRounds(rounds + 1);
    };

    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
            if (score >= nImages) {
                console.log("You Won!");
                resetScore();
            }
        }
    }, [score]);


    return  <div>
                <h1>Current Score: {score}</h1>
                <h1>Highest Score: {highScore}</h1>
                <h1>Current Round: {rounds}</h1>
                <ul>
                    <ImageCard incrementScore={incrementScore} resetScore={resetScore} rounds={rounds} index={0}></ImageCard>,
                    <ImageCard incrementScore={incrementScore} resetScore={resetScore} rounds={rounds} index={1}></ImageCard>,
                    <ImageCard incrementScore={incrementScore} resetScore={resetScore} rounds={rounds} index={2}></ImageCard>
                </ul>
            </div>
}
