const switchcase = (cases, defaultCase, key) => key in cases ? cases[key]() : defaultCase;
// cases.hasOwnProperty(key) ? cases[key] : defaultCase;

const switchcaseF = (cases, defaultCase, key) =>
  switchcase(cases, defaultCase, key);

export { switchcase, switchcaseF };

//https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d
