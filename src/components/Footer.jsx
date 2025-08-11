import React from 'react'
import "../game.css"
import { Game_state_playing } from '../Constants'

export const Footer = ({onNewClick,onSuggestClick,gameState}) => {

  const renderButton=()=>{
    if (gameState===Game_state_playing){
      return <button onClick={onSuggestClick}>Suggest</button>
    }
    return <button onClick={onNewClick}>New Game</button>
  }
  return (
    <div className='Footer'>
         {renderButton()}
    </div>
  )
}