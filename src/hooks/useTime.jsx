import { useState } from "react";
import { timerCount } from "../helpers/timeHelper";

export const useTime = () => {
  const [time, setTime] = useState({
    elapsed: timerCount(),
  });

  const updateTime = () => setTime({
    elapsed: timerCount(),
  });

  const resetTime = () => {
    //TODO: pensar no reset do Tempo
  };

  return [time, updateTime, resetTime];
};
