import logo from './logo.svg';
import React, {useState, useEffect} from "react"
import './App.css';
import Header from "./components/header"
import Hangman from "./components/hangman"
import EnterLetter from "./components/letters"
import WrongLetters from "./components/wrongLetters"
import PopUp from "./components/popup"

const words = ["GAME", "HELLO", "PROGRAM", "WORD", "REACT", "JAVASCRIPT"]
let selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase()
function App() {
  const [letter, setLetter] = useState('')
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [alreadyEntered, setAlreadyEntered] = useState(false)
  const [canPlay, setCanPlay] = useState(true)
  const [win, setWin] = useState(false)
  const [lost, setLost] = useState(false)


  function alreadyEnteredLetter() {
    console.log("entered inside already")
    setAlreadyEntered(true)
    setTimeout(() => {
      setAlreadyEntered(false)
    }, 2000)
  }

  function checkWin() {
    const selectedWordArr = [...selectedWord]
    const selectedWordUnique = [...new Set(selectedWordArr)]
    if(selectedWordUnique.length === correctLetters.length) {
      setWin(true)
      setCanPlay(false)
    }
  }

  function checkLost() {
    
    if(wrongLetters.length >= 6){
      setLost(true)
      setCanPlay(false)
    }
    console.log("lost check", lost)
  }

  useEffect(() => {
    
    const handleClick = event => {
      let {key, keyCode} = event
      key = key.toLowerCase()

      if(canPlay && ((keyCode >=65 && keyCode <=90) || (keyCode >=97 && keyCode <=122))){
        setLetter(key)
        if(correctLetters.includes(key) || wrongLetters.includes(key)) {
          alreadyEnteredLetter()
        } else {
          if(selectedWord.includes(key)) {
            setCorrectLetters(currentLetters => [...currentLetters, key])
            
          } else {
            setWrongLetters(currentLetters => [...currentLetters, key])
          }
        }
      }
    }
    checkWin()
    checkLost()

    window.addEventListener("keypress", handleClick)
    return () => window.removeEventListener("keypress", handleClick)
  }, [canPlay, correctLetters, wrongLetters])

  function playAgain(e) {
    e.preventDefault()
    setCorrectLetters([])
    setWrongLetters([])
    setCanPlay(true)
    setLost(false)
    setWin(false)

    selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase()
  }
 
  console.log(correctLetters, wrongLetters)
  console.log("lostsss", lost)
  return (
    
    <div className="App">
      <Header />
      <div className="wrong-letters-flex">
        <Hangman wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
      </div>
      { lost && <div className="win-lost">
          <p>You Lost!!!</p>
          <p onClick={playAgain}><a href="">Play again</a></p>
        </div>}
      { win && <div className="win-lost">
          <p>You Won!!!</p>
          <p onClick={playAgain}><a href="">Play again</a></p>
        </div>}
      <EnterLetter selectedWord={selectedWord} 
      correctLetters={correctLetters}/>
      {
        alreadyEntered && <PopUp letter={letter}/>
      }
    </div>
  );
}

export default App;
