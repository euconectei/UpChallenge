import styled, { keyframes } from 'styled-components';

export const slideToRight = keyframes`
  100% {
    left: 110%;
  }
`;

export const Cloud = styled.div`
  background-color: #fff;
  border-radius: 999px;
  position: absolute;
  height: 50px;
  width: 150px;

  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${slideToRight} ${props => props.duration} infinite linear;

  &::after {
    background-color: #fff;
    border-radius: 999px;
    content: '';
    height: 50px;
    left: 15px;
    position: absolute;
    top: -20px;
    width: 50px;
  }

  &::before {
    background-color: #fff;
    border-radius: 999px;
    content: '';
    height: 80px;
    left: 50px;
    position: absolute;
    top: -40px;
    width: 80px;
  }
`;