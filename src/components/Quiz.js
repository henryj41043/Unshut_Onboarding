import React, { useContext, useEffect } from 'react'
import QuizQuestion from './QuizQuestion'
import Score from './Score'
import { AppContext } from './App'

export default function Quiz() {

    const {
        timeOver,
        QuizAPI,
        currentPart,
        isCurrentPartOver,
        currentQuestion,
        timeOverNextQuestion
    } = useContext(AppContext)

    useEffect(() => {
        if (timeOver) {
            timeOverNextQuestion()
        }
    }, [timeOver, timeOverNextQuestion])

    if (!isCurrentPartOver) {
        return (
            <div className="quiz-container">
                <div className="quiz-header">
                    <span className="quiz-header-col f-2">UNSHUT ONBOARDING</span>
                    <span className="quiz-header-col f-1">#41837</span>
                    <span className="quiz-header-col f-2"></span>
                    <span className="quiz-header-col f-2">SECTION {currentQuestion + 1} OF {QuizAPI[currentPart].questions.length}</span>
                    <span className="quiz-header-col f-1"></span>
                </div>
                        
                <QuizQuestion
                    question={QuizAPI[currentPart].questions[currentQuestion].questionText}
                    answers={QuizAPI[currentPart].questions[currentQuestion].questionAnswers}
                />
                        
            </div>
        )
    } else {
        return (
            <div className="quiz-container">
                <div className="quiz-header">
                    <span className="quiz-header-col f-2">UNSHUT ONBOARDING</span>
                    <span className="quiz-header-col f-1">#41837</span>
                    <span className="quiz-header-col f-2"></span>
                    <span className="quiz-header-col f-2">PARTIAL SCORE</span>
                    <span className="quiz-header-col f-1"></span>
                </div>
                <Score />
            </div>
        )
    }
}