import style from './Header.module.css'

import Title from '../tilte/Title'
import SubTitle from '../subTitle/SubTitle'
import Icon from '../icon/Icon'

function Header () {
  return (
  
    <div className={style.header}>
      <Title>Joga da Velha</Title>
      <SubTitle>Criado por Carlos Fermino</SubTitle>
      <div className={style.iconContent}>
      <Icon iconName="github" href="github.com/carlosfermino" />
      </div>
    </div>

  


  )
}
export default Header