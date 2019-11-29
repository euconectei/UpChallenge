import React, { Component, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const TimeContainer = styled.div`
  font-family: "Press Start 2P";
  color: orange;
  position: absolute;
  top: 5vh;
  right: 5vw;
  /* transform: translateX(-50%); */
  text-shadow: 3px 0 1px #fff, -3px 0 1px #fff, 0 3px 1px #fff, 0 -3px 1px #fff, -2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff;
  z-index: 99999;
`;

class Time extends Component {


  render() {
    const [elapsed, setElapsed] = useState();

    const started = moment();
    let duration = moment.duration(moment().diff(started));
    let hours = (duration.hours() < 10) ? `0${duration.hours()}` : duration.hours();
    let minutes = (duration.minutes() < 10) ? `0${duration.minutes()}` : duration.minutes();
    let seconds = (duration.seconds() < 10) ? `0${duration.seconds()}` : duration.seconds();
    let milliseconds = duration.milliseconds()

    setInterval(() => {
      duration = moment.duration(moment().diff(started));
      hours = (duration.hours() < 10) ? `0${duration.hours()}` : duration.hours();
      minutes = (duration.minutes() < 10) ? `0${duration.minutes()}` : duration.minutes();
      seconds = (duration.seconds() < 10) ? `0${duration.seconds()}` : duration.seconds();
      milliseconds = parseInt(duration.milliseconds() / 100);
      setElapsed(`${hours}:${minutes}:${seconds}.${milliseconds}`);
    }, 1000);

    return (<TimeContainer>{elapsed}</TimeContainer>);
  }
}

export default Time;