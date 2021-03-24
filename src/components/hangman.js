import React from "react"

export default function Hangman({wrongLetters}) {
    const error = wrongLetters.length;

    return (
        <svg height="350" width="250" className="svg-container">
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="260" />
            <line x1="20" y1="260" x2="100" y2="260" />

            {error > 0 && <circle cx="140" cy="100" r="50" />
            }

           {
               error > 1 && <line x1="140" y1="150" x2="140" y2="250" />
           }

           {
               error > 2 && <line x1="140" y1="180" x2="100" y2="200" />
           }

           {
               error > 3 && <line x1="140" y1="180" x2="180" y2="200" />
           }

           {
               error > 4 && <line x1="140" y1="220" x2="120" y2="250" />
           }
           {
               error > 5 && <line x1="140" y1="220" x2="160" y2="250" />
           }
        </svg>
    )

}