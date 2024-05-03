import style from './Game.module.css'

import GameOption from '../gameOption/GameOption'

function Game () {
  return (
    <div className={style.game}>
      <GameOption />
      <GameOption />
      <GameOption />
      <GameOption />
      <GameOption />
      <GameOption />
      <GameOption />
      <GameOption />
      <GameOption />
      
    </div>
  )
}
export default Game