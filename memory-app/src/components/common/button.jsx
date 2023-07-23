import React from "react";

export default function MyButton({clickFunction, buttonText}) {

    return  <button onClick={clickFunction}>
                {buttonText}
            </button>
}
