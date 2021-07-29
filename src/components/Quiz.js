import React from 'react'
import QuizQuestion from './QuizQuestion'

export default function Quiz() {
    return (
        <>
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
            <button className="btn-next">next</button>
        </>
    )
}
