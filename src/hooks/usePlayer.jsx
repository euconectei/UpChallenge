import { useState, useCallback } from "react";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    name: null,
    pos: "5%",
    speed: 0,
    turbo: false,
  });

  const updatePlayer = ({ name, pos, speed, turbo }) => setPlayer(prev => ({
    ...prev,
    name: (name) ? name : prev.name,
    pos: (pos) ? pos : prev.pos,
    speed: (speed) ? speed : prev.speed,
    turbo: (turbo) ? turbo : prev.turbo
  }));

  const resetPlayer = useCallback(() => {
    setPlayer(prev => ({
      ...prev,
      name: null,
      pos: "5%",
      speed: 0,
      turbo: false
    }));
  }, []);

  return [player, updatePlayer, resetPlayer];
};
