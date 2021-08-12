import React,  { useState, useEffect, useCallback } from 'react'

import '../css/App.css';

import Video from './Video'
import Header from './Header'
import Quiz from './Quiz'

import QuizAPI from '../api/QuizAPI'


export const AppContext = React.createContext()
const LOCAL_STORAGE_KEY = 'AptitudeTest.Answers'

function App() {

  const [testOver, setTestOver] = useState(false)

  // USE STATES FOR COUNTER
  const [seconds, setSeconds] = useState(3); //30
  const [minutes, setMinutes] = useState(0); //1
  const [timeOver, setTimeOver] = useState(false)
  
  // USE STATES FOR QUIZ
  const [currentPart, setCurrentPart] = useState(0) //0
  const [isCurrentPartOver, setCurrentPartOver] = useState(false)
  const [isLastPart, setLastPart] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])

  // USE EFFECTS COUNTER
  useEffect(() => {
    // Change minutes to 1
    if (minutes <= 1 && seconds > 0 ) {
      setTimeout(() => setSeconds(prevSeconds => prevSeconds - 1), 1000);
    }
    else if (minutes > 0 && seconds === 0) {
      setMinutes(0)
      setSeconds(59)
    }  
    else if (minutes === 0 && seconds === 0) {
      setTimeOver(true)
    } 
    
  }, [seconds, minutes, setTimeOver])


  // USE EFFECT QUIZ
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedAnswers))
  }, [selectedAnswers])

  
  // FUNCTIONS 

  // Counter
  function resetTimer () {
    setTimeOver(false);
    setMinutes(0); //1
    setSeconds(15); //30
  }

  // QUIZ
  const handleCurrentPart = useCallback(
    () => {
      console.log('currentPart', currentPart)
      const nextPart = currentPart + 1
  
      if (nextPart < QuizAPI.length - 1) {
        console.log('nextPart', nextPart, "/", QuizAPI.length-1)
        setCurrentPartOver(false);
        setCurrentPart(nextPart);
        setCurrentQuestion(0);
        resetTimer();
      } else {
        setCurrentPartOver(false);
        setCurrentPart(nextPart);
        setCurrentQuestion(0);
        resetTimer();
        setLastPart(true);
        
      }
    },
    [currentPart]
  )

  const handleAnswerButtonClick = useCallback(
    () => {
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < QuizAPI[currentPart].questions.length) {
        setCurrentQuestion(nextQuestion);
        resetTimer();       
      } else {
        setCurrentPartOver(true)
      }
    },
    [currentPart, currentQuestion]
  )

  const handleSelectedAnswers = useCallback(
    (answer) => {
      console.log("answer:::", answer)
      setSelectedAnswers(selectedAnswers => [...selectedAnswers, answer])
    },
    []
  )

  const timeOverNextQuestion = useCallback(
    () => {
      const nextQuestion = currentQuestion + 1;
  
      if (nextQuestion < QuizAPI[currentPart].questions.length) {
          handleSelectedAnswers("Not Answered.")
          setCurrentQuestion(nextQuestion);
          resetTimer();
      } else {
          handleSelectedAnswers("Not Answered.");
          setCurrentPartOver(true);
      }
    },
    [currentPart, currentQuestion, handleSelectedAnswers]
  )

  // CONTEXT VALUE
  const appContextValue = {
    seconds,
    minutes,
    timeOver,
    QuizAPI,
    currentPart,
    isCurrentPartOver,
    isLastPart,
    currentQuestion,
    handleAnswerButtonClick,
    handleSelectedAnswers,
    handleCurrentPart,
    timeOverNextQuestion,
    resetTimer,
    setSeconds,
    setTestOver
  }

  return (
    <AppContext.Provider value={appContextValue}>
      <Video />
      { testOver ? 
        (
          <>
          { console.log('TestOver > Fade Black') }
          </>
        ) : 
        (
          <div className="App">
            <Header />
            <Quiz />
          </div>
        )
      }
    </AppContext.Provider>
  )
}

export default App;
