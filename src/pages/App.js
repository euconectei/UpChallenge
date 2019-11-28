import React, { useState, useEffect } from 'react';

import Game from '../components/game';
import { World, Floor, Grass, Kerbs, Track, Lane } from "../components/world";
import { Cloud } from "../components/cloud";
import { Sky } from '../components/sky';
import { Car } from '../components/car';
const started = Date.now();

function App() {
  const positions = { left: '5vw', center: '36vw', right: '70vw' };
  // console.log({ started });

  const timerCount = () => (Date.now() - started);

  const [position, setPosition] = useState(positions.center);
  const [elapsed, setElapsed] = useState(timerCount());

  const onDown = event => {
    switch (event.key) {
      case 'a':
        setPosition(positions.left);
        break;
      case 's':
        setPosition(positions.center);
        break;
      case 'd':
        setPosition(positions.right);
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onDown);
    setInterval(() => setElapsed(timerCount()), 100);
  });

  return (
    <Game time={elapsed} score={'1.234.123'} speed={'345 Km/h'} turbo={true}>
      <World>
        <Sky>
          <Cloud delay="0" duration="60s" left="-150px" top="100px" />
          <Cloud delay="5s" duration="90s" left="-275px" top="200px" />
          <Cloud delay="5s" duration="60s" left="-425px" top="150px" />
          <Cloud delay="0" duration="90s" left="-550px" top="275px" />
          <Cloud delay="0" duration="60s" left="-650px" top="50px" />
        </Sky>
        <Floor>
          <Grass>
            <Kerbs>
              <Track>
                <Lane left="33%" top="0%" />
                <Lane left="66%" top="0%" />
                <Lane left="33%" top="30%" />
                <Lane left="66%" top="30%" />
                <Lane left="33%" top="55%" />
                <Lane left="66%" top="55%" />
                <Lane left="33%" top="80%" />
                <Lane left="66%" top="80%" />
              </Track>
            </Kerbs>
          </Grass>
        </Floor>
        <Car pos={position} />
      </World>
    </Game>
  );
}

export default App;
