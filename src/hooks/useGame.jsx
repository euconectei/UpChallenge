import { useState, useCallback } from 'react';

export const useGame = () => {
  const [game, setGame] = useState({
    started: false,
    gameover: false,
  });

  const updateGame = ({ started, gameover }) =>
    setGame(prev => ({
      ...prev,
      started: (started) ? started : prev.started,
      gameover: (gameover) ? gameover : prev.gameover,
    }));

  const resetGame = useCallback(() => {
    setGame(prev => ({
      ...prev,
      started: false,
      gameover: false,
    }));
  }, []);

  return [game, updateGame, resetGame]
}