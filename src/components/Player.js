import React from 'react';

const Player = (props) => {
  function handleClick(){
    const play = !props.playSound
    props.onPlayChange(play)
  }

    return (
      <>
        <p>I am player bpm={props.bpm}</p>
        <button onClick={handleClick}>Play/Pause</button>
      </>
    )
}

export default Player;
