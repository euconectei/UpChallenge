import React from 'react';
import styled from 'styled-components';

const Score = styled.div`
  font-family: "Press Start 2P";
  color: orange;
  position: absolute;
  top: 5vh;
  left: 5vw;
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
  right: 5vw;
  /* transform: translateX(-50%); */
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

const Game = ({ children, time, score, speed, turbo }) => {
  const milliseconds = parseInt((time % 1000) / 100);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  return (
    <>
      <Time>
        {`
        ${
          (hours < 10) ? `0${hours}` : hours
          }:${
          (minutes < 10) ? `0${minutes}` : minutes
          }:${
          (seconds < 10) ? `0${seconds}` : seconds
          }.${milliseconds}
        `}
      </Time>
      <Score>{score}</Score>
      <Speed>{speed}</Speed>
      <Turbo active={turbo}>TURBO</Turbo>
      {children}
    </>
  )
};

export default Game;