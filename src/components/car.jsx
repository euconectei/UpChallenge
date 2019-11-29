import React from 'react';
import styled from 'styled-components';

import * as carImg from '../assets/images/CARRO.png';
// const carImg = require('../assets/images/CARRO.png');

const CarWrap = styled.div`
  bottom: 1%;
  position: absolute;
  transition: all .3s linear;
  width: 25%;
`;

export const Car = ({ pos }) => (
  <CarWrap style={{ left: pos }}>
    <img src={carImg} style={{ width: '100%' }} alt="Fusca Azul" />
  </CarWrap>
);