import { useState, useCallback } from "react";

export const useGame = () => {
  const [game, setGame] = useState({
    animated: false,
    started: false,
    gameover: false
  });

  const updateGame = ({ animated, started, gameover }) =>
    setGame(prev => ({
      ...prev,
      animated: animated ? animated : prev.animated,
      started: started ? started : prev.started,
      gameover: gameover ? gameover : prev.gameover
    }));

  const resetGame = useCallback(() => {
    setGame(prev => ({
      ...prev,
      animated: false,
      started: false,
      gameover: false
    }));
  }, []);

  return [game, updateGame, resetGame];
};
