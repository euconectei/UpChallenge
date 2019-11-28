export const TimeService = {
  getTime: () => '00:32:14.9',
  setStartTime: () => localStorage.setItem('startTime', new Date.now()),
  setFinishTime: () => localStorage.setItem('finishTime', new Date.now())
};
