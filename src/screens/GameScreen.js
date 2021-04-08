import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import QuestionComp from '../components/QuestionComponent'
import { loadQuestion } from '../components/LoadQuestion'
import QuizCategories from '../components/QuizCategories'
import GameHUD from '../components/GameHUD'
import SaveScoreForm from '../components/SaveScoreForm'

export default function Game({gameHistory})
{
  const [catChoice, setCatChoice] = useState(null)
  const [questions, setQuestions] = useState([])
  const [currQuestion, setCurrQuestion] = useState(null)
  const [questionNum, setQuestionNum] = useState(0)
  const [loading, setLoading] = useState(true)
  const [running, setRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState(0)
  
  //Load the questions from the category chosen
  useEffect(() =>
  {
    loadQuestion(10, catChoice, 'medium', 'multiple')
      .then(setQuestions)
      .catch(console.error)
  }, [catChoice])

  //Elapsed Time
  useEffect(() =>
  {
    let timeInterval
    if (running)
    {
      timeInterval = setInterval(() => setElapsedTime(totalElapsedTime => totalElapsedTime + 0.1), 100)
    }
    return () => clearInterval(timeInterval)
  }, [running, currQuestion])

  //Saved score
  const savedScore = () =>
  {
    gameHistory.push('/')
  }

  //Change Question
  const changeQuestion = useCallback
  (
    (scoreBonus = 0) =>
    {
      let scoreModifier = 10 - elapsedTime

      if (scoreModifier < 1)
        scoreModifier = 1

      setElapsedTime(0)
      
      //Checks if there are any questions remaining and caculates final score
      if (questions.length === 0)
      {
        setFinished(true)
        setRunning(false)
        return setScore(score + scoreBonus * scoreModifier)
      }

      //Get next question to a random question
      const currQuestion = questions[Math.floor(Math.random() * questions.length)]
      //Removes the current displayed question from the pool
      const newQuestionPool = [...questions].filter(question => question !== currQuestion)

      setQuestions(newQuestionPool)
      setCurrQuestion(currQuestion)
      setLoading(false)
      setScore(score + scoreBonus * scoreModifier)
      setQuestionNum(questionNum + 1)
    },
    [
      score, questions, questionNum, elapsedTime,
      setQuestions, setCurrQuestion, setQuestionNum, setElapsedTime, setLoading, setRunning
    ]
  )

  return (
    <>
      {loading && !finished && catChoice && <div id='loading'/>}
      {!catChoice && (<QuizCategories setChoice={choice => setCatChoice(choice)}/>)}
      {!finished && !loading && currQuestion && catChoice && 
      (
        <>
          <GameHUD questionNum={questionNum} score={score}/>
          <QuestionComp 
            question={currQuestion} 
            changeQuestion={changeQuestion}/>
        </>
      )}
      {finished && <SaveScoreForm score={score} savedScore={savedScore} />}

      <Link to='/' className='btn'>
        Go Home
      </Link>
    </>
  )
}
