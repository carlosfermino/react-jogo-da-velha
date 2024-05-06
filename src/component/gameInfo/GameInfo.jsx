import style from './GameInfo.module.css'

import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo ({currentPlayer, winner, onReset, isDraw}) {

  const shouldEnableButton = () => winner !== 0 || isDraw
    
    /* { if (winner !== 0) return true
    if (isDraw) return true
  }*/

  return (
    <div className={style.gameInfo}>
      {
       !isDraw && winner === 0 && 
        <>
          <h4>Próximo a jogar:</h4>
          {
            currentPlayer === 1 && <Icon iconName="circle" />
          }
          {
            currentPlayer === -1 && <Icon iconName="x" />
          } 
        </>
      }
      {
         isDraw && <h4>Empatou!!!</h4>
      }

      {
        winner !== 0 &&
        <>
          <h4>Fim de Jogo!!! Campeão:</h4>
          {
            winner === 1 && 
              <Icon iconName="circle" />
          }
          {
            winner === -1 && 
              <Icon iconName="x" />
          } 
        </>
      }
     
      <Button 
      onClick={onReset} 
      disabled={!shouldEnableButton()}
      isDraw={isDraw}
      >
      
        Reiniciar
      </Button>
      
    </div>
    
    
  )
}
export default GameInfo