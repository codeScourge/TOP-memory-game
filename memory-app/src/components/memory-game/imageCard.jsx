import React from "react";
import { useState, useEffect } from "react";

export default function ImageCard({incrementScore, resetScore, index, rounds}) {
    const [clicked, setClicked] = useState(0);

    useEffect(() => {
        setClicked(0);
    }, [rounds])

    function click() {
        if (clicked == 0) {
            console.log("correct")

            incrementScore();
            setClicked(1);
        }   else {
            console.log("wrong")
            resetScore();
        }
    }

    return      <li
                    onClick={click}
                    key={index}>
                    {index}
                </li>
}
