import React from 'react';
import '../game.css';



const Gamecircle = ({id,children,onCircleClicked,className}) => {
  return (
    <div className={`gameCircle ${className}`} onClick={()=> onCircleClicked(id)} >
       {children}
    </div>
  )
}

export default Gamecircle;