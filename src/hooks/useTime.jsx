import { useState } from "react";

export const useTime = () => {
  const [time, setTime] = useState({
    countdown: 3000,
    elapsed: 0
  });

  const updateElapsed = () =>
    setTime(prev => ({
      ...prev,
      elapsed: prev.elapsed + 10
    }));

  const updateCountdown = () =>
    setTime(prev => ({
      ...prev,
      countdown: prev.countdown - 10
    }));

  const resetTime = () =>
    setTime(prev => ({
      ...prev,
      countdown: 3000,
      elapsed: 0
    }));

  return [time, updateElapsed, updateCountdown, resetTime];
};
