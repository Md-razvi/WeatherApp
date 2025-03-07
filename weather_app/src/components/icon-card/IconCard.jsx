import React from 'react'
import './icon-card.css'
const IconCard = ({icon,temp,title}) => {
  return (
    <div className='icon-card'>
      {icon}
      <div>
      <p>{temp}</p>
      <p>{title}</p>
      </div>  
    </div>
  )
}

export default IconCard
