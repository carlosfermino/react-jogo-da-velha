import { useState, useEffect } from 'react'
//import { useEffect } from 'react'

import style from './Game.module.css'
import GameOption from '../gameOption/GameOption'
import GameInfo from '../gameInfo/GameInfo'
import Button from '../button/Button'

const winnerTable = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(-1)
  const [winner, setWinner] = useState(0)

  const handleClick = (position) => {
    if (gameState[position] === 0 && winner === 0) {
      let newGameState = [...gameState] 
      newGameState[position] = currentPlayer
      setGameState(newGameState)
    }
  }

  const verifyGame = () => {
    winnerTable.forEach((line) => {
      const values = line.map((pos) => gameState[pos])
      const sum = values.reduce((acc, value) => acc + value)
      if (sum === 3 || sum === -3) {
        setWinner(sum / 3)
      }
    })
  }

  const handleRest = () => {
    setGameState((Array(9).fill(0)))
    setWinner(0)
    setCurrentPlayer(-1)
  }

  useEffect(() => {
    setCurrentPlayer(currentPlayer * -1)
    verifyGame()
  }, [gameState])
  
  return (
    <div className={style.gameContent}>
      <div className={style.game}>
        {
          gameState.map((value, position) => 
            <GameOption 
              key={`game-option-pos-${position}`} 
              status={value} 
              onClick={() => handleClick(position)}
            />
          )
       }
      </div>
       <GameInfo 
        currentPlayer={currentPlayer} 
        winner={winner}
        onReset={handleRest}
        />
    </div>
  )
}
export default Game