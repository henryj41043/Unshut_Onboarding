import React, { useContext } from 'react';
import { AppContext } from './App';
import QuizFreetext from './QuizFreetext';
import FlashOfImages from './FlashOfImages';

export default function QuizQuestion( props ) {

    const { question, answers, freetext, flashOfImages } = props
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

            {/* {console.log("FROM QUIZQUESTION COMPONENT: freetext ", freetext)} */}
            
            { flashOfImages ? ( <FlashOfImages /> ) : ( <> </> ) } 
            
            { freetext ? (<QuizFreetext />) : ( <> </> ) }
                   
        </div>
    )
}