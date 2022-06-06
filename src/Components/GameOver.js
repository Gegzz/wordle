
import React from "react";
import { useContext } from "react";
import { AppContext } from "../App"; 

function GameOver() {
  const { gameOver,  currAttempt, correctWord } = useContext(AppContext);
  return (<div className="gameOver"> 
  <h3 className="h3">{gameOver.guessedWord ? " WoW ! Correctly Guessed" : "Loser! you Failed"}</h3>
  <h1>Correct: {correctWord}</h1>
  {gameOver.guessedWord && (<h3>You Guessed in {currAttempt.attempt} attempts</h3>)}
  </div>)}


export default GameOver;
