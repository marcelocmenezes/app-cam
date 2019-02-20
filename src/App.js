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
    return (
      <div>
        <image src={this.state.imgUrl} />
        <Webcam 
          audio={false}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          onUserMediaError={err => console.log(err)}
         />
        <CircleButton />
      </div>
    )
  }
}
