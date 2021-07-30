import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [seconds, setSeconds] = useState(5);
    const [minutes, setMinutes] = useState(1);

    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      }
      else if(seconds === 0) {
        setMinutes(0)
        setSeconds(10)
      }
    })

    if (minutes === 0 && seconds === 0) {
        setSeconds('time over')
        // next question
    }
    

    return (
        <>
            <p className="counter">00:0{minutes}:{seconds}</p>
        </>
    )
}
