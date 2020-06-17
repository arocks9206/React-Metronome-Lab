import React, {Component} from 'react';
import Player from '../components/Player.js';
import Slider from '../components/Slider.js';


class MetContainer extends Component {
  constructor(props){
    super(props)
    this.state = {bpm: 40, play: false, sound: null, intervalID: null}


    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.playMetronome = this.playMetronome.bind(this);
  }

  handleSliderChange(newValue){
    this.setState({bpm: newValue})
    this.state.sound.pause();
    clearInterval(this.state.intervalID);
    this.playMetronome(this.state.play);
  }

  playMetronome(play){
    this.setState({play: play})
    //let intervalID = null
    if(play == true){
      let intervalID = setInterval(() => {
        this.state.sound.play();
      }, 60000/this.state.bpm
      )
      this.setState({intervalID: intervalID});
    }
    else if (this.state.sound != null){
      clearInterval(this.state.intervalID)
      this.state.sound.pause();
    }
  }

  componentDidMount(){
    const sound = new Audio('/MetroBeat1.wav')
    this.setState({sound: sound})
  }

  render(){

    return(
      <div>
        <Player bpm={this.state.bpm} playSound={this.state.play} onPlayChange={this.playMetronome}/>
        <Slider bpm={this.state.bpm} onSliderChange={this.handleSliderChange}/>
      </div>
    )
  }
}

export default MetContainer;
