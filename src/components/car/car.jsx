import React from "react";
import styled, { keyframes } from "styled-components";

import * as carImg from "../../assets/images/CARRO.png";
// const carImg = require('../assets/images/CARRO.png');

const moveCar = keyframes`
  0% {
    bottom: 1.5%;
  }

  100% {
    bottom: 1%;
  }
`;

const CarWrap = styled.div`
  animation: ${moveCar} 0.3s linear infinite 4s;
  bottom: 1%;
  position: absolute;
  transition: all 0.3s linear;
  width: 25%;
`;

export const Car = ({ pos }) => (
  <CarWrap style={{ left: pos }}>
    <img src={carImg} style={{ width: "100%" }} alt="Fusca Azul" />
  </CarWrap>
);
