import React from "react"


export default function EnterLetter({selectedWord, correctLetters}) {
    const selectedArr = [...selectedWord]

    return (
        <div className="input-container">
            {
                selectedArr.map((letter, idx) => (
                    <div key={idx} 
                    className="dash-input">
                        {correctLetters.includes(letter) && letter.toUpperCase()}
                    </div>
                ))
            }
            
        </div>
    )
}