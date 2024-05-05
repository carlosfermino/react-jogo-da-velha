import classNames from 'classnames'

import style from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({iconName}) => <Icon iconName={iconName} size="25px" />

function GameOpition ({status, onClick, isWinner}) {
  return (
    <div className={classNames(style.gameOption, {[style.winner]: isWinner})} onClick={onClick}>
      {
        status === 1 && <GameIcon iconName="circle" /> 
      }
      {
        status === -1 && <GameIcon iconName="x" /> 
      }
      
    </div>
  )
}
export default GameOpition