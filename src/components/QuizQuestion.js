import React, { useState } from 'react';
import QuizAPI from '../api/QuizAPI'

export default function QuizQuestion() {

    const questions = QuizAPI

    // State that controls the question being displayed
    const [currentQuestion, setCurrentQuestion] = useState(0)
    // State that controls the end of test > fade away to black.
    const [testOver, setTestOver] = useState(false)

    const handleAnswerButtonClick = () => {
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setTestOver(true);
        }
    }

    return (
        
        <div className="quiz-question-container">
        
            {/* TERNARY: if testOver = true > Sites fades away, otherways Questions are looped. */}
            { testOver ? 
                (   <p className="quiz-question">WORK IN PROGRESS...SITE WILL FADE AWAY AT THIS MOMENT</p>
                ) : (
                    <>
                        <p className="quiz-question">{questions[currentQuestion].questionText}</p>
                        {questions[currentQuestion].questionAnswers.map((answer)=>
                            <button 
                                className="quiz-answers"
                                onClick={handleAnswerButtonClick}>
                                {answer.answerText}
                            </button>)
                        }
                    </>    
                )}
        </div>
    )
}
