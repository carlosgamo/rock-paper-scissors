import { useState } from 'react'
import RpsGame from './pages/RpsGame'
import './App.css'

function App() {
  const [score, setScore] = useState(0)

  return (
    <>
      <div id='container' 
            className="w-screen h-screen pt-10 pl-4 pr-4"
      >
        <div id='header' className='header'>
          <div className='text-left leading-3 ml-2 text-white font-bold '>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </div>
          <div className='header-score-container'>
            <p className=''>SCORE</p>
            <p className='header-score'>{score}</p>
          </div>
        </div>

        <div id='game' className='flex relative justify-center'>
          <RpsGame score={score} setScore={setScore}/>
        </div>
      </div>
    </>
  )
}

export default App