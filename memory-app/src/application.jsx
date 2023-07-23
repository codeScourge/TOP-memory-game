import React, {useEffect, useState} from "react";
import ImageCard from "./components/memory-game/imageCard";
import MyButton from "./components/common/button";
import ScoreBoard from "./components/memory-game/scoreBoard";
import arrayShuffle from 'array-shuffle';

export default function Application() {
    const [imageArray, setImageArray] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [currentHighscore, setCurrentHighscore] = useState(0);


    // number of images
    useEffect(() => {
        let imgsArray = [];
        for (let i = 0; i < 2; i++) {
            imgsArray.push(
                            <ImageCard
                                currentScore={currentScore}
                                setCurrentScore={setCurrentScore}
                                highScore={currentHighscore}
                                setHighScore={setCurrentHighscore}
                                keyId={i}>
                            </ImageCard>
                        )
        }
        setImageArray(imgsArray);
    }, [])

    // shuffle images every time score changes
    useEffect(() => {
        //setImageArray()
        console.log(arrayShuffle([...imageArray]))

        if (currentScore > highScore) {
            setHighScore(currentScore + 1)
        };
    }, [currentScore])

    console.log(imageArray);

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
                    highScore={currentHighscore}>
                </ScoreBoard>
            </div>
}
