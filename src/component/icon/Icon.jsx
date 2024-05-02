

function Icon ({iconName, size, href}) {
  return (
    <a href={`https://${href}`} target="_blank">
      
      <img src={`/icons/${iconName}.svg`} width={size}  />
      
    </a>
    
  )
}

Icon.defaultProps = {
  size: '30px' 
}
Icon.defaultProps = {
  href:''
}

export default Icon