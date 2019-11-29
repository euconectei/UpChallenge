import { useState, useCallback } from "react";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    name: null,
    pos: "5%",
    speed: 0,
    turbo: false
  });

  const updateSpeed = () =>
    setPlayer(prev =>
      prev.speed <= 285
        ? {
            ...prev,
            speed: prev.speed + 0.15
          }
        : prev
    );

  const updatePlayer = ({ name, pos, turbo }) =>
    setPlayer(prev => ({
      ...prev,
      name: name ? name : prev.name,
      pos: pos ? pos : prev.pos,
      turbo: turbo ? turbo : prev.turbo
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

  return [player, updatePlayer, updateSpeed, resetPlayer];
};
