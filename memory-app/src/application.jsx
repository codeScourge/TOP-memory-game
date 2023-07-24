import React, {useEffect, useState} from "react";
import ImageCard from "./components/memory-game/imageCard";
import MyButton from "./components/common/button";
import ScoreBoard from "./components/memory-game/scoreBoard";
import arrayShuffle from 'array-shuffle';
import uuid from 'react-uuid';

export default function Application() {
    const [imageArray, setImageArray] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [rounds, setRounds] = useState(0);

    const nImages = 4;

    function addScore() {
        setCurrentScore(currentScore + 1);
    };

    function resetScore() {
        setCurrentScore(0);
    };

    function addRound() {
        setRounds(rounds + 1);
    };

    // on first render create components, shuffle on the ones after
    useEffect(() => {
        if (imageArray != 0) {
            setImageArray(arrayShuffle([...imageArray]));
        }
        else {
            let imgsArray = [];
            for (let i = 1; i <= nImages; i++) {
                const newKey = uuid();
                imgsArray.push(
                    <ImageCard
                        keyId={newKey}
                        number={i}
                        addScore={addScore}
                        resetScore={resetScore}
                        addRound={addRound}
                        rounds={rounds}>
                    </ImageCard>
                )
            }

            setImageArray(imgsArray);
        }


        // update highscore
        if (currentScore > highScore) {
            setHighScore(currentScore)

            if (currentScore == nImages) {
                console.log("You won!");
                setRounds(rounds + 1);
            }
        };
    }, [currentScore])


    return  <div className="wrapper">
                <ul className="wrapper__images">
                    {imageArray}
                </ul>

                <MyButton
                    clickFunction={() => {console.log("button clicked")}}
                    buttonText={"test"}>
                </MyButton>

                <ScoreBoard
                    currentScore={currentScore}
                    highScore={highScore}>
                </ScoreBoard>
            </div>
}
