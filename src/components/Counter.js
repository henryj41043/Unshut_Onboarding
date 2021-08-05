import React, { useContext } from 'react'
import { AppContext } from './App'

export default function Counter() {
    const { seconds, minutes } = useContext(AppContext)

    if (seconds >= 10) {
      return (
        <>
          
          <p className="counter">00:0{minutes}:{seconds}</p>
          {console.log(seconds)}
        </>
      )
    } else {
      return (
        <>
          
          <p className="counter">00:0{minutes}:0{seconds}</p>
          {console.log(seconds)}
        </>
      )
    }
    
}
