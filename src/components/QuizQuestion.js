import React, { useContext } from 'react';
import { AppContext } from './App';
import QuizFreetext from './QuizFreetext';

export default function QuizQuestion( props ) {

    const { question, answers, freetext } = props
    const { handleAnswerButtonClick, handleSelectedAnswers } = useContext(AppContext)

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
                    key={answer.answerId}
                >
                    {answer.answerText}
                </button>)
            }

            {console.log("freetext ", freetext)}
            
            { freetext ? (<QuizFreetext />) : ( <> </> ) }
        </div>
    )
}