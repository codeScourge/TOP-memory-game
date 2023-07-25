import React from "react";
import { useState, useEffect } from "react";

export default function ImageCard({incrementScore, resetScore, index, rounds, keyId}) {
    const [clicked, setClicked] = useState(0);

    const cardStyle = {
        order: index  // when passing a variable into the style dont use brackets: {index} will not be rendered
    }

    const imgSource = "/" + keyId +  ".webp"

    useEffect(() => {
        setClicked(0);
    }, [rounds])

    function click() {
        if (clicked == 0) {
            console.log(keyId +  " was correct")

            incrementScore();
            setClicked(1);
        }   else {
            console.log(keyId + " was wrong")
            resetScore();
        }
    }


    return <img src={imgSource}
            alt="My Singing Monster"
            style={cardStyle}
            className="wrapper__cards__card"
            onClick={click}
            key={keyId}
            id={index}/>
}

