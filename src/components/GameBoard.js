import React, { useEffect } from "react";
import { useState } from "react";
import Gamecircle from "./Gamecircle";
import '../game.css';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { isWinner,isDraw,getComputerMove} from "../helper";



import { No_Player,no_Circles,player_1,player_2,Game_state_Win,Game_state_idle,Game_state_draw,Game_state_playing } from "../Constants";

const GameBoard= ()=>{
   
    const [gameBoard,setGameBoard]=useState(Array(no_Circles).fill(0));
    const [currentPlayer,setCurrentPlayer]=useState(player_1);
    const [gameState,setgameState]=useState(Game_state_playing);
    const [winPlayer,setwinPlayer]=useState(No_Player);
    
    useEffect(()=>{
       initGame();
    },[])
   
    const initGame=()=>{
      setGameBoard(Array(no_Circles).fill(0));
      setCurrentPlayer(player_1);
      setgameState(Game_state_playing);
    }


    const suggestMove=()=>{
      circleClicked(getComputerMove(gameBoard));
    }


    const initBoard=()=>{
      const circle=[];
      for( let i=0 ;i<no_Circles;i++){
        circle.push(renderCircle(i));
      }
      return circle;
    }

    const circleClicked=(id)=>{ 
    if(gameBoard[id]!==No_Player) return;
    if(gameState!==Game_state_playing) return;

    setGameBoard(prev => {
      return prev.map((circle, pos) => {
        if (pos === id) {
          return currentPlayer;
        }
        return circle;
      });
    });
    
    if(isWinner(gameBoard,id,currentPlayer)){
      setgameState(Game_state_Win);
      setwinPlayer(currentPlayer);
    }
    if(isDraw(gameBoard,id,currentPlayer)){
      setgameState(Game_state_draw);
      setwinPlayer(No_Player);
    }
  
      setCurrentPlayer(currentPlayer===player_1 ? player_2 : player_1);
    }
    const renderCircle=(id)=>{
      return (
        <Gamecircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
      );
    }
    
    return (
      <>
      <div className="MainContainer">
      <Header CurrentPlayer={currentPlayer} GameState={gameState} WinPlayer={winPlayer} />
      <div  className="gameBoard" >
        {initBoard()}
      </div>
      <Footer onNewClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
      </div>
      </>
      )
}

export default GameBoard;