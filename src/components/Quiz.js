import React from 'react'
import QuizQuestion from './QuizQuestion'
import QuizAPI from '../api/QuizAPI'


export const QuizAPIContext = React.createContext()

export default function Quiz() {

    const questions = QuizAPI

    return (
        <QuizAPIContext.Provider value={questions}>
            <div className="quiz-container">
                <div className="quiz-header">
                    <span className="quiz-header-col f-2">UNSHUT ONBOARDING</span>
                    <span className="quiz-header-col f-1">#41837</span>
                    <span className="quiz-header-col f-2"></span>
                    <span className="quiz-header-col f-2">SECTION 1 OF 10</span>
                    <span className="quiz-header-col f-1"></span>
                </div>
                <QuizQuestion />
            </div>
            {/* <button className="btn-next">next</button> */}
        </QuizAPIContext.Provider>
    )
}
