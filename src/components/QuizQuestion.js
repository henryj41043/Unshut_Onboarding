import React from 'react'

export default function QuizQuestion() {
    return (
        <div className="quiz-question-container">
            <p className="quiz-question"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac feugiat tortor. Fusce bibendum dui ut lorem aliquam, eget porttitor ex ultrices. Donec molestie purus ut lectus ornare eleifend.</p>
            <select className="quiz-answers">
                <option value="Answer 1">Lorem ipsum dolor sit amet</option>
                <option value="Answer ">LimLorem ipsum dolor sit amete</option>
                <option selected value="Answer 3">Lorem ipsum dolor sit amet</option>
                <option value="Answer 4">Lorem ipsum dolor sit amet</option>
            </select>
        </div>
    )
}
