import React, { useContext } from 'react';
import { AppContext } from './App'

export default function QuizQuestion( props ) {

    const { question, answers } = props
    const { handleAnswerButtonClick, handleSelectedAnswers, resetTimer } = useContext(AppContext)
    return (
        <div className="quiz-question-container">
            <p className="quiz-question">{question}</p>
            {answers.map( (answer) =>
                <button 
                    className="quiz-answers"
                    onClick={()=>{
                        handleSelectedAnswers(answer.answerText);
                        handleAnswerButtonClick();
                        resetTimer();
                    }}
                    key={answer.answerId}>
                    {answer.answerText}
                </button>)
            }
        </div>
    )
}