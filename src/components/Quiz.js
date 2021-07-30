import React, { useState, useEffect } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizAPI from '../api/QuizAPI'

const LOCAL_STORAGE_KEY = 'AptitudeTest.Answers'

export default function Quiz() {

    // State that controls the question being displayed
    const [currentQuestion, setCurrentQuestion] = useState(0)

    // State that controls the end of test > fade away to black.
    const [testOver, setTestOver] = useState(false)

    const [selectedAnswers, setSelectedAnswers] = useState([])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedAnswers))
      }, [selectedAnswers])

    function handleAnswerButtonClick () {
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < QuizAPI.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setTestOver(true);
        }
    }

    function handleSelectedAnswers(answer) {
        console.log(answer)
        setSelectedAnswers(selectedAnswers => [...selectedAnswers, answer])
    }

    return (
        <>
            {/* TERNARY: if testOver = true > Sites fades away, otherways Questions are looped. */}
            { testOver ? 
                (   <p className="quiz-question">WORK IN PROGRESS...SITE WILL FADE AWAY AT THIS MOMENT</p>    
                ) : (
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
                            handleAnswerButtonClick={handleAnswerButtonClick}
                            handleSelectedAnswers={handleSelectedAnswers}
                        />)
                        
                    </div>   
                )}
            {/* <button className="btn-next">next</button> */}
        </>
    )
}