import React,  { useState, useEffect } from 'react'
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
  const [seconds, setSeconds] = useState(10); //30
  const [minutes, setMinutes] = useState(0); //1
  const [timeOver, setTimeOver] = useState(false)
  
  // USE STATES FOR QUIZ
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])



  // USE EFFECTS COUNTER
  useEffect(() => {
    // Change minutes to 1
    if (minutes === 0 && seconds > 0) {
      setTimeout(() => setSeconds(prevSeconds => prevSeconds - 1), 1000);
    } else if (minutes === 0 && seconds === 0) {
      setTimeOver(true)
    } 
    // else if (minutes > 0 && seconds === 0) {
    //   setMinutes(0)
    //   setSeconds(59)
    // } 
  }, [seconds, minutes, setTimeOver])


  // USE EFFECT QUIZ
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedAnswers))
  }, [selectedAnswers])

  // CONTEXT VALUE
  const appContextValue = {
    seconds,
    minutes,
    timeOver,
    currentQuestion,
    selectedAnswers,
    handleAnswerButtonClick,
    handleSelectedAnswers,
    timeOverNextQuestion,
    resetTimer
  }


  // FUNCTIONS 

  // Counter
  function resetTimer () {
    setTimeOver(false);
    setMinutes(0); //1
    setSeconds(10); //30
  }

  // QUIZ
  function handleAnswerButtonClick () {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < QuizAPI.length) {
      setCurrentQuestion(nextQuestion);        
    } else {
      setTestOver(true);
    }
  }

  function handleSelectedAnswers(answer) {
      console.log(answer)
      setSelectedAnswers(selectedAnswers => [...selectedAnswers, answer])
  }

  function timeOverNextQuestion () {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < QuizAPI.length) {
        handleSelectedAnswers("Not Answered.")
        setCurrentQuestion(nextQuestion);
        resetTimer();
        
    } else {
        setTestOver(true);
    }
  }


  

  return (
    <AppContext.Provider value={appContextValue}>

      { testOver ? 
        (
          <>
          { console.log('TestOver > Fade Black') }
          <Video />
          </>
        ) : 
        (
          <div className="App">
            <Video />
            <Header />
            <Quiz />
          </div>
        )
      }
        
    </AppContext.Provider>
  )
}

export default App;
