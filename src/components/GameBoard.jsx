import "../styles/GameBoard.css";
import useGameContext from "../hooks/useGameContext.jsx";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const GameBoard = forwardRef(({ setScore, setGameOver, startGame, setLocalFen, server_fen, playerColor}, ref) => {
  const {
    highlightedSquare,
    moveableSquares,
    hoverSquare,
    visualBoard,
    score,
    local_fen,
    gameOver,
    promoteBoard,
    resetGame,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useGameContext({fenProp: server_fen, playerColor});

  useImperativeHandle(ref, () => ({
    resetGame
  }));

  useEffect(() => {
    if(gameOver) {
      setGameOver(gameOver);
    }
  }, [gameOver, setGameOver]);

  useEffect(() => {
    setScore(score);
  }, [score, setScore]);

  useEffect(() => {
    if(local_fen) {
      console.log(local_fen)
      setLocalFen(local_fen);
    }
  }
  , [local_fen, setLocalFen]);

  return (
    <>
      <div
        draggable="false"
        className={`chessboard ${startGame ? "" : "unclickable"}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {promoteBoard}
        {highlightedSquare}
        {moveableSquares}
        {hoverSquare}
        {visualBoard}
      </div>
    </>
  );
});

export default GameBoard;