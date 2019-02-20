import React, { Component } from 'react';
import CircleButton from './CircleButton';
import Webcam from "react-webcam"

export default class App extends Component {
  setRef = webcam => {
    this.webcam = webcam
  }

  constructor(props){
    super(props)
    this.state = {
      imgUrl: null
    }
  }

  capture = () => {
    const imgSrc = this.webcam.getScreenshot()
    console.log(imgSrc)
    this.setState({ imgUrl: imgSrc})
  }

  render() {
    const videoConstraints = {
      width: 720,
      height: 960,
      facingMode: "user"
    }

    return (
      <div>
        <img src={this.state.imgUrl} />
        <Webcam 
          audio={false}
          ref={this.setRef}
          style={{height: '100%', width:'100%', transform: 'rotateY(180deg)'}}
          screenshotFormat='image/jpeg' 
          videoConstraints={videoConstraints}
         />
        <CircleButton />
      </div>
    )
  }
}
