import React, { useContext, useEffect } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizAPI from '../api/QuizAPI'
import { AppContext } from './App'

// const LOCAL_STORAGE_KEY = 'AptitudeTest.Answers'

export default function Quiz() {

    const {
        timeOver,
        currentQuestion,
        timeOverNextQuestion
    } = useContext(AppContext)

    useEffect(() => {
        if (timeOver) {
            timeOverNextQuestion()
        }
    }, [timeOver, timeOverNextQuestion])

    return (
        <>
            <div className="quiz-container">
                <div className="quiz-header">
                    <span className="quiz-header-col f-2">UNSHUT ONBOARDING</span>
                    <span className="quiz-header-col f-1">#41837</span>
                    <span className="quiz-header-col f-2"></span>
                    <span className="quiz-header-col f-2">SECTION {currentQuestion + 1} OF {QuizAPI.length}</span>
                    <span className="quiz-header-col f-1"></span>
                </div>
                        
                <QuizQuestion
                    question={QuizAPI[currentQuestion].questionText}
                    answers={QuizAPI[currentQuestion].questionAnswers}
                />
                        
            </div>
            {/* <button className="btn-next">next</button> */}
        </>
    )



    // return (
    //     <>
    //         { timeOver ? 
    //             (   <> 
    //                     { timeOverNextQuestion() }
    //                 </>    
    //             ) : (
    //                 <div className="quiz-container">
    //                     <div className="quiz-header">
    //                         <span className="quiz-header-col f-2">UNSHUT ONBOARDING</span>
    //                         <span className="quiz-header-col f-1">#41837</span>
    //                         <span className="quiz-header-col f-2"></span>
    //                         <span className="quiz-header-col f-2">SECTION {currentQuestion + 1} OF {QuizAPI.length}</span>
    //                         <span className="quiz-header-col f-1"></span>
    //                     </div>
                        
    //                     <QuizQuestion
    //                         question={QuizAPI[currentQuestion].questionText}
    //                         answers={QuizAPI[currentQuestion].questionAnswers}
    //                         // handleAnswerButtonClick={handleAnswerButtonClick}
    //                         // handleSelectedAnswers={handleSelectedAnswers}
    //                     />)
                        
    //                 </div>   
    //             )}
    //         {/* <button className="btn-next">next</button> */}
    //     </>
    // )
}