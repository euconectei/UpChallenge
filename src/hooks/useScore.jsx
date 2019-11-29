import { useState } from "react";

export const useScore = () => {
  const [score, setScore] = useState({ score: 0 });

  const updateScore = () =>
    setScore(prev => ({
      ...prev,
      score: prev.score + 3
    }));

  const resetScore = () => {
    //TODO: pensar no reset do Tempo
  };

  return [score, updateScore, resetScore];
};
