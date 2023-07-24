import React, { useEffect, useState } from "react";
import ScoreBoard from "./scoreBoard";

export default function ImageCard({keyId, number, addScore, resetScore, addRound, rounds}) {
    const [clicked, setClicked] = useState(false);

    // reset state when new round is started
    useEffect(() => {
        setClicked(false)
        console.log("resetting clicked state")
    }, [rounds]);

    function whenClicked() {
        if (clicked == true) {
            console.log("wrong");

            resetScore();
            addRound();
        }  else {
            console.log("correct");

            setClicked(true);
            addScore();
            };
        };

    return  <img src={"/" + number + ".webp"} onClick={whenClicked} key={keyId} className="wrapper__images__img"/>
    }



//function fetchImage () {
//    fetch("https://api.giphy.com/v1/gifs/random?api_key=YRxEtAWXjAKjTRibDWYgeAQ0xRLbz3Wi&tag=cat", {mode:"cors"})  //return promise to fetch data
//                                            .then((response => {return response.json()}))   // returns a promise to convert data into json
//                                            .then((json) => {setSource(json.data.images.original_still.url)})
//}

