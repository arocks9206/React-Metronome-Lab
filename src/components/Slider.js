import React from 'react';

const Slider = (props) => {
  function handleChange(event){
    const bpmValue = parseInt(event.target.value)
    props.onSliderChange(bpmValue)
  }

    return (
      <>
      <p>I am slider</p>
      <input onChange={handleChange} type="range" id="bpm" min= "40" max= "218" value={props.bpm}/>
      <label htmlFor="bpm">BPM</label>
      </>
    )
}

export default Slider;
