import styled, { keyframes } from "styled-components";

import { Display } from "./gameDisplay";

const removeCountdown = keyframes`
  0%{
    opacity: 0;
    display: block;
  }
  33%{
    opacity: 1;
    display: block;
  }
  99%{
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

export const GameCountdown = styled(Display)`
  animation: ${removeCountdown} 0.3s linear 1 5s;
  animation-fill-mode: forwards;

  font-size: 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
`;
