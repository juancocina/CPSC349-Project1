import React from 'react'

export default function QuizCategories({ setChoice }) {
    return (
    <div className='container--categories'><h1>Pick Your Quiz Category!</h1>
        <div>
        <button className='btn' onClick={() => setChoice(18)}>Computer Trivia</button>
        <button className='btn' onClick={() => setChoice(9)}>General Trivia</button>
        <button className='btn' onClick={() => setChoice(23)}>History Trivia</button>
        <button className='btn' onClick={() => setChoice(12)}>Music Trivia</button>
        </div>
    </div>
    )
}