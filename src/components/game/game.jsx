import React from 'react';
import styled from 'styled-components';

const Score = styled.div`
  font-family: "Press Start 2P";
  color: orange;
  position: absolute;
  top: 5vh;
  right: 5vw;
  text-shadow: 3px 0 1px #fff, -3px 0 1px #fff, 0 3px 1px #fff, 0 -3px 1px #fff, -2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff;
  z-index: 99999;
`;

const Speed = styled.div`
  font-family: "Press Start 2P";
  color: orange;
  position: absolute;
  bottom: 5vh;
  left: 5vw;
  text-shadow: 3px 0 1px #fff, -3px 0 1px #fff, 0 3px 1px #fff, 0 -3px 1px #fff, -2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff;
  z-index: 99999;
`;

const Time = styled.div`
  font-family: "Press Start 2P";
  color: orange;
  position: absolute;
  top: 5vh;
  left: 50vw;
  transform: translateX(-50%);
  text-shadow: 3px 0 1px #fff, -3px 0 1px #fff, 0 3px 1px #fff, 0 -3px 1px #fff, -2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff;
  z-index: 99999;
`;

const Turbo = styled.div`
  font-family: "Press Start 2P";
  background-color: red;
  border-radius: 3px;
  color: white;
  padding: 10px;
  position: absolute;
  bottom: 5vh;
  right: 5vw;
  /* text-shadow: 3px 0 1px red, -3px 0 1px red, 0 3px 1px red, 0 -3px 1px red, -2px -2px 1px red, 2px 2px 1px red, -2px 2px 1px red, 2px -2px 1px red; */
  z-index: 99999;
`;

const Game = ({ children }) => (
  <>
    <Time>00:32:14.9</Time>
    <Score>1.234.123</Score>
    <Speed>345 Km/h</Speed>
    <Turbo active={true}>TURBO</Turbo>
    {children}
  </>
);

export default Game;