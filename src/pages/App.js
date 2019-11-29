// https://www.youtube.com/watch?v=ZGOaCxX8HIU

import React, { useEffect } from "react";

import Game from "../components/game";
import { World, Floor, Grass, Kerbs, Track, Lane } from "../components/world";
import { Cloud } from "../components/cloud";
import { Sky } from "../components/sky";
import { Car } from "../components/car";

// Hook
import { useGame } from "./../hooks/useGame";
import { usePlayer } from "./../hooks/usePlayer";
import { useTime } from "./../hooks/useTime";
import { useScore } from "./../hooks/useScore";

// Helpers
import { scoreCalc } from "../helpers/scoreHelper";
import { newPosition, positions } from "../helpers/playerHelper";

//Utils
import { switchcaseF } from "../utils/switchcase";
import NewPlayerForm from "../components/newPlayerForm";

function App() {

  const [game, updateGame] = useGame();
  const [player, updatePlayer] = usePlayer();
  const [time, updateTime] = useTime();
  const [score, updateScore] = useScore(scoreCalc(false));

  const onDown = event => {
    const { pos } = player;
    switchcaseF(
      {
        a: () => updatePlayer({ pos: positions.left }),
        s: () => updatePlayer({ pos: positions.center }),
        d: () => updatePlayer({ pos: positions.right }),
        t: () => updatePlayer({ turbo: true }),
        arrowleft: () => updatePlayer({ pos: positions[newPosition('toLeft', pos)] }),
        arrowright: () => updatePlayer({ pos: positions[newPosition('toRight', pos)] }),
      },
      null,
      (event.key).toLowerCase()
    );
  };

  console.log("rerender")

  let interval;
  useEffect(() => {
    if (game.started) {
      window.addEventListener("keydown", onDown);
      interval = setInterval(() => {
        if (player.speed < 285) updatePlayer({ speed: player.speed + 6 });
        updateTime();
        updateScore(player.turbo);
      }, 100);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", onDown);
    };
  });

  return (
    <>
      <div style={{
        position: 'relative',
        height: 600,
        width: 800,
      }}>
        {game.started ? (
          <Game time={time.elapsed} score={score.score} speed={`${player.speed}Km/h`} turbo={player.turbo}>
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
              <Car pos={player.pos} />
            </World>
          </Game>
        ) : (
            <NewPlayerForm cbGame={updateGame} />
          )}
      </div>
      <aside>
        <h1>UpChallenge</h1>
        <h2>Manual</h2>
        <p>Para iniciar, preencha seu nome e clique em "Iniciar".</p>
        <p>Teclas:</p>
        <ul>
          <li>a: Faixa da esqueda</li>
          <li>s: Faixa central</li>
          <li>d: Faixa da direita</li>
          <li>t: Turbo</li>
          <li>ArrowLeft: desloca para faixa da esquerda</li>
          <li>ArrowRight: desloca para faixa da diretia</li>
        </ul>
      </aside>
    </>
  );
}

export default App;
