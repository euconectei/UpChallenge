import React from 'react';
import styled from 'styled-components';

import * as carImg from '../assets/images/CARRO.png';
// const carImg = require('../assets/images/CARRO.png');

const CarWrap = styled.div`
  bottom: 1vh;
  position: absolute;
  width: 25vw;
  left: ${props => props.left};
`;

export const Car = ({ pos }) => (
  <CarWrap>
    <img src={carImg} style={{ width: '100%' }} />
  </CarWrap>
);