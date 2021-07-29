import React from 'react'
import recWhite from '../images/RECORDING-WHITE.gif'

export default function Header() {
    return (
        <div className="header">
            <img className="rec" src={recWhite} />
            <p className="counter">00:01:30</p>
        </div>
    )
}
