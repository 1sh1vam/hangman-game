import React from "react"

export default function PopUp({letter}) {
    return (
        <p className="popup">
            You have already entered {letter.toUpperCase()}.
        </p>
    )
}