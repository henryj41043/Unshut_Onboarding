import React from 'react';

export default function QuizQuestion( props ) {

    const { question, answers, handleAnswerButtonClick, handleSelectedAnswers } = props
    
    return (
        <div className="quiz-question-container">
            <p className="quiz-question">{question}</p>
            {answers.map( (answer) =>
                <button 
                    className="quiz-answers"
                    onClick={()=>{
                        handleSelectedAnswers(answer.answerText);
                        handleAnswerButtonClick();
                    }}
                    key={answer.answerId}>
                    {answer.answerText}
                </button>)
            }
        </div>
    )
}