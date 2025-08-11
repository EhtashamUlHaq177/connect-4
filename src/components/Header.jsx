import React from 'react'
import "../game.css";
import { Game_state_Win,Game_state_draw,Game_state_idle,Game_state_playing } from '../Constants';

export const Header = ({CurrentPlayer,GameState,WinPlayer}) => {
  const renderLabel=()=>{
    switch(GameState){
      case Game_state_Win:
        return <div>player {WinPlayer} wins</div>;
      case Game_state_playing:
        return <div>player {CurrentPlayer} Turn</div>;
        case Game_state_draw:
          return <div>Game is a Draw</div>;
      default:
    }

  }
  return (
    <div className='Header-Text'>
        {renderLabel()}
    </div>
  )
}
