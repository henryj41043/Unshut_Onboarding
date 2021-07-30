import React from 'react'
import recWhite from '../images/RECORDING-WHITE.gif'
import Counter from './Counter'

export default function Header() {
    return (
        <div className="header">
            <img className="rec" src={recWhite} />
            <Counter />
        </div>
    )
}
