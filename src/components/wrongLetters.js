import React from "react"

export default function WrongLetters({wrongLetters}) {
    return (
        <div className="wrong-letters">
            <h2>Wrong Letters</h2>
            { wrongLetters.map((letter, idx) => 
            <span key={idx}>{letter.toUpperCase()}, </span>
            )}
        </div>
    )
}