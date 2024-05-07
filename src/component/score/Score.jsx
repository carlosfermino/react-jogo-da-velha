import style from './Score.module.css'

import Icon from '../icon/Icon'

function Score ({scoreX, scoreO}) {
  return (
    <>
    <h4>
      Placar:
    </h4>
    <div  className={style.score}>
      <div className={style.ScoreContent}>
        <Icon iconName="circle" />
        <h2>{scoreO}</h2>
      </div>
      <div className={style.ScoreContent}>
      <Icon iconName="x" />
        <h2>{scoreX}</h2>
      </div>
    </div>
    </>
  )
}
export default Score