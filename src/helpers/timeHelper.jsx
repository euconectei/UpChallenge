const started = Date.now();

const timerCount = () => {
  console.log(Date.now() - started);
  return Date.now() - started;
};

export { timerCount };
