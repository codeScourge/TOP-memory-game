import React, {useEffect, useState} from "react";
import ImageCard from "./components/memory-game/imageCard";
import ScoreBoard from "./components/memory-game/scoreBoard";
import arrayShuffle from 'array-shuffle';

const maxImages = 6;    // current amount of uploaded monster images in public folder

export default function Application() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [rounds, setRounds] = useState(0);
    const [nImages, setNImages] = useState(3);

    function nextDifficulty() {
        resetScore();
        if (nImages >= maxImages) {
            setNImages(3);
            console.log("You just one the whole game!");
        } else {
            console.log("Next round!");
            setNImages(nImages + 3);
        }
    }

    function incrementScore() {
        setScore(score + 1);
    };

    function resetScore() {
        setScore(0);
        setRounds(rounds + 1);
    };

    function resetGame() {
        resetScore();
        setNImages(3);
    }

    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
        }

        if (score >= nImages) {
            nextDifficulty();
        }
    }, [score]);



    // Q: why does this work? Wont the imageArray be a new one with new states every time?

    // A: It is because the node is already existing, which means it will not remount and set default states, but rerender them with the new
    // parameters. This mean shuffling it wont change the position of the elements, but their props, which will break everything. This means
    // we should probably work with a grids css properties

    let numberArray = [];
    for (let i = 1; i <= nImages; i++) {
        numberArray.push(i);
    }

    const imageArray = arrayShuffle(numberArray).map((number, index) => {return <ImageCard incrementScore={incrementScore} resetScore={resetScore} rounds={rounds} index={number} keyId={index + 1}></ImageCard>})

    return  <div className="wrapper">
                <ScoreBoard
                    currentScore={score}
                    highScore={highScore}
                    rounds={rounds}>
                </ScoreBoard>

                <div className="wrapper__cards">
                    {imageArray}
                </div>

                <button onClick={resetGame} className="wrapper__reset"> restart game </button>
            </div>
}
