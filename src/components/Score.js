import React, { useContext } from 'react'
import { AppContext } from './App'

export default function Score() {

    const {
        QuizAPI,
        currentPart,
        isLastPart,
        handleCurrentPart,
        setTestOver,
    } = useContext(AppContext)

    console.log('currentPart', currentPart)
    const maxIndex = QuizAPI[currentPart].scores.length

    function getRandomScore (max) {
        const x = Math.floor(Math.random() * max);
        console.log("score random index", x);
        return x;
    }

    return (
        <>  
            {/* If isLastPart is false, it will render the continue-button */}
            {/* If isLastPart is true, it will not render the continue-button and the screen will fade away. */}
            { isLastPart ? 
                ( 
                    <>  
                        <div className='score-container'>
                            <p className='score-result'>
                                {QuizAPI[currentPart].scores[getRandomScore(maxIndex)]}
                            </p>
                        </div>
                        {/* Screen Fades Away after [ 5000 ] miliseconds  */}
                        { setTimeout( () => { setTestOver(true) }, 5000 ) } 
                    </>
                ) :
                (
                    <>
                        <div className='score-container'>
                            <p className='score-result'>{QuizAPI[currentPart].scores[getRandomScore(maxIndex)]}</p>
                            <button 
                                className="score-continue-btn"
                                onClick={()=>{handleCurrentPart()}}
                            > CONTINUE            
                            </button>
                        </div>
                        {/* { setTimeout( () => { handleCurrentPart(); console.log('auto-continue') }, 5000 ) }  */}
                    </>
                )
                
            }
        </>
    )    
}
