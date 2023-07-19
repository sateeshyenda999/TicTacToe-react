import React from "react";

function EndGame({  restartGame, player, draw,winCount ,clear}) {
  return (
    <div className="endgame">
      {!draw && <span className="win">{player ? "O WON" : "X WON"}</span>}
      {draw && <span className="win">DRAW GAME</span>}

      <span classname="count">X wins :{winCount.X}<br/> O wins :{winCount.O}</span>


      <button className="btn" onClick={restartGame}>
        RESTART GAME
      </button>
      <button className="btn" onClick={clear}>clearAll</button>
     
    </div>
  );
}

export default EndGame;