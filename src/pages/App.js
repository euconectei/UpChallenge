// https://www.youtube.com/watch?v=ZGOaCxX8HIU

import React, { useEffect } from "react";

import Game from "../components/game/game";
import {
  World,
  Floor,
  Grass,
  Kerbs,
  Track,
  Lane
} from "../components/world/world";
import { Cloud } from "../components/world/cloud";
import { Sky } from "../components/world/sky";
import { Car } from "../components/car/car";

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
import NewPlayerForm from "../components/player/newPlayerForm";
import { GameContainer } from "./../components/game/gameContainer";
import { PageContainer } from "./../components/page/pageContainer";
import { Manual } from "./../components/page/manual";

function App() {
  const [game, updateGame] = useGame();
  const [player, updatePlayer, updateSpeed] = usePlayer();
  const [time, updateElapsed, updateCountdown] = useTime();
  const [score, updateScore] = useScore(scoreCalc(false));

  const startGame = ({ started, name }) => {
    updatePlayer({ name: name });
    updateGame({ started: started });
  };

  const onDown = event => {
    const { pos } = player;
    switchcaseF(
      {
        a: () => updatePlayer({ pos: positions.left }),
        s: () => updatePlayer({ pos: positions.center }),
        d: () => updatePlayer({ pos: positions.right }),
        t: () => updatePlayer({ turbo: true }),
        arrowleft: () =>
          updatePlayer({ pos: positions[newPosition("toLeft", pos)] }),
        arrowright: () =>
          updatePlayer({ pos: positions[newPosition("toRight", pos)] })
      },
      null,
      event.key.toLowerCase()
    );
  };

  useEffect(() => {
    if (game.started) {
      window.addEventListener("keydown", onDown);

      setInterval(() => {
        if (time.countdown >= 0) {
          updateCountdown();
        } else {
          updateElapsed();
          updateSpeed();
          updateScore({
            speed: parseInt(player.speed),
            activedTurbo: player.turbo
          });
        }
      }, 100);
    }

    return () => {
      clearInterval();
      window.removeEventListener("keydown", onDown);
    };
  });

  return (
    <>
      <PageContainer>
        <GameContainer>
          {game.started ? (
            <Game
              name={player.name}
              time={time.elapsed <= 0 ? 0 : time.elapsed}
              score={score.score}
              speed={`${parseInt(player.speed)}Km/h`}
              turbo={player.turbo}
              animated={false}
              countdown={
                time.countdown >= 0 ? parseInt(time.countdown / 1000) : "START"
              }
            >
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
            <NewPlayerForm cbGame={startGame} />
          )}
        </GameContainer>
        <Manual>
          <h1>UpChallenge</h1>
          <h2>Manual</h2>
          <p>Para iniciar, preencha seu nome e clique em "Iniciar".</p>
          <p>Teclas:</p>
          <ul>
            <li>
              <span className="btn">a</span>: Faixa da esqueda
            </li>
            <li>
              <span className="btn">s</span>: Faixa central
            </li>
            <li>
              <span className="btn">d</span>: Faixa da direita
            </li>
            {/* <li>
              <span className="btn">t</span>: Turbo
            </li> */}
            <li>
              <span className="btn">&larr;</span>: desloca para faixa a esquerda
              da atual
            </li>
            <li>
              <span className="btn">&rarr;</span>: desloca para faixa a direita
              da atual
            </li>
          </ul>
        </Manual>
      </PageContainer>
    </>
  );
}

export default App;
