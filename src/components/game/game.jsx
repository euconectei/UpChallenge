import React from "react";
import styled from "styled-components";

import { Display } from "./gameDisplay";
import { GameCountdown } from "./gameCountdown";

const Score = styled(Display)`
  top: 5%;
  left: 5vw;
`;

const Speed = styled(Display)`
  bottom: 5%;
  left: 5%;
`;

const Time = styled(Display)`
  top: 5%;
  right: 5%;
`;

const Player = styled(Display)`
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
`;

const Turbo = styled.div`
  font-family: "Press Start 2P";
  background-color: red;
  border-radius: 3px;
  color: white;
  display: ${props => (props.turbo ? "block" : "none")};
  padding: 10px;
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: 99999;
`;

const Game = ({ children, countdown, name, time, turbo, score, speed }) => {
  const milliseconds = parseInt((time % 1000) / 100);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  return (
    <>
      <GameCountdown>{countdown > 0 ? countdown : "GO!"}</GameCountdown>
      <Time>
        {`
        ${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}.${milliseconds}
        `}
      </Time>
      <Player>{name}</Player>
      <Score>{score}</Score>
      <Speed>{speed}</Speed>
      <Turbo active={turbo}>TURBO</Turbo>
      {children}
    </>
  );
};

export default Game;
