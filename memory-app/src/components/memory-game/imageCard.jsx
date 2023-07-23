import React, { useEffect, useState } from "react";

export default function ImageCard({currentScore, setCurrentScore, highScore, setHighScore, keyId}) {
    const [clicked, setClicked] = useState(false);
    const [source, setSource] = useState(false);

    function fetchImage () {
        fetch("https://api.giphy.com/v1/gifs/random?api_key=YRxEtAWXjAKjTRibDWYgeAQ0xRLbz3Wi&tag=cat", {mode:"cors"})  //return promise to fetch data
                                                .then((response => {return response.json()}))   // returns a promise to convert data into json
                                                .then((json) => {setSource(json.data.images.original_still.url)})
    }

    function onClick() {
        if (clicked) {
            console.log("wrong");

            setCurrentScore(0);
        }  else {
            console.log("correct");

            setClicked(true);
            setCurrentScore(currentScore + 1);
            }
        }

    // fetch new image on mount
    useEffect(() => {
        fetchImage();
        console.log(keyId + " is being mounted")
    }, [])


    return  <img src={source} onClick={onClick} key={keyId} className="wrapper__images__img"/>
    }



