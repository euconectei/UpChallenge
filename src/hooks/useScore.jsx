import { useState } from "react";
import { scoreCalc } from "../helpers/scoreHelper";

export const useScore = () => {
  const [score, setScore] = useState({ score: 0 });

  const updateScore = turboActived => setScore(prev => ({
    ...prev,
    score: (prev.score + scoreCalc(turboActived))
  }));

  const resetScore = () => {
    //TODO: pensar no reset do Tempo
  };

  return [score, updateScore, resetScore];
};
