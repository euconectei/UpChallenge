const scoreCalc = (speed, turboActived) =>
  turboActived ? parseInt(speed * 0.5) : parseInt(speed * 0.3);

export { scoreCalc };
