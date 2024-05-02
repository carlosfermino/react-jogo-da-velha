import style from './SubTitle.module.css'

function SubTile ({children}) {
  return (
    <h6 className={style.subtitle}>
      {children}
    </h6>
  )
}
export default SubTile