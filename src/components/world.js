import styled, { keyframes } from 'styled-components';

export const moveGrass = keyframes`
0% {
    background-image: linear-gradient(#269863 50%, #30B660 0%);
  }

  50% {
    background-image: linear-gradient(#30B660 50%, #269863 0%);
  }

  100% {
    background-image: linear-gradient(#269863 50%, #30B660 0%);
  }
`;
export const moveKerbs = keyframes`
  0% {
    background-image: linear-gradient(red 50%, #fff 0%);
  }

  50% {
    background-image: linear-gradient(#fff 50%, red 0%);
  }

  100% {
    background-image: linear-gradient(red 50%, #fff 0%);
  }
`;
export const moveTrack = keyframes`
100% {
    top: 0%;
  }
`;


export const World = styled.div`
  background-color: #25B4F7;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
`;

export const Floor = styled.div`
bottom: 0;
  height: 75vh;
  left: 50%;
  overflow: hidden;
  position: absolute;
  transform: translateX(-50%);
  width: 300%;
`;

export const Grass = styled.div`
animation: ${moveGrass} .3s linear infinite;
  background-position: right;
  background-size: 5% 50%;
  height: 100%;
  width: 100%;
  transform: perspective(100px) rotateX(30deg);
`;

export const Kerbs = styled.div`
  animation: ${moveKerbs} .3s linear infinite;
  background-position: right;
  background-size: 10px 150px;
  bottom: 0;
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  transform: translateX(-50%);
  width: 20%;
`;

export const Track = styled.div`
animation: ${moveTrack} .5s linear infinite;
  background-color: #312D33;
  position: absolute;
  height: 110%;
  margin: 0 15px;
  width: 95%;
  top: -30%;
`;
export const Lane = styled.div`
  background-color: #7D787D;
  height: 15%;
  position: absolute;
  width: 3%;
  transform: translateX(-50%);

  left: ${props => props.left};
  top: ${props => props.top};
`;