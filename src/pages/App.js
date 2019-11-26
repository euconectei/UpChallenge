import React from 'react';

import Game from '../components/game/game';
import { World, Road, Floor, Grass, Kerbs, Track, Lane } from "../components/world/world";
import { Cloud } from "../components/cloud/cloud";
import { Sky } from '../components/sky';
import { Car } from '../components/car';

function App() {
  return (
    <Game>
      <World>
        <Sky>
          <Cloud delay="0" duration="20s" left="-150px" top="100px" />
          <Cloud delay="5s" duration="25s" left="-275px" top="200px" />
          <Cloud delay="5s" duration="20s" left="-425px" top="150px" />
          <Cloud delay="0" duration="25s" left="-550px" top="275px" />
          <Cloud delay="0" duration="20s" left="-650px" top="50px" />
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
        <Car pos="left" />
      </World>
    </Game>
  );
}

export default App;
