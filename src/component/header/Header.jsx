import Title from '../tilte/Title'
import SubTitle from '../subTitle/SubTitle'
import style from './Header.module.css' 

function Header () {
  return (
  
    <div className={style.header}>
      <Title>Joga da Velha</Title>
      <SubTitle>Criado por Carlos Fermino</SubTitle>
    </div>

  


  )
}
export default Header