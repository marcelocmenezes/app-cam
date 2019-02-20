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
      dataUri: '',
      isShowVideo: true,
    }
  }

  capture = () => {
    const dataUri = this.webcam.getScreenshot()
    this.setState({
      dataUri,
      isShowVideo: false
    });
    
    console.log(dataUri)

    this.showVideoTimeoutId = setTimeout(() => {
      this.setState({
        isShowVideo: true
      });
    }, 900);
    
    
    
  }

  render() {
    const videoConstraints = {
      width: 720,
      height: 960,
      facingMode: "user"
    }

    let videoStyles = this.state.isShowVideo ? {display: 'inline-block', height: '100%', width:'100%', transform: 'rotateY(180deg)'} : {display: 'none'};

    let showHideImgStyle = !this.state.isShowVideo ? {display: 'inline-block'} : {display: 'none'};

    return (
      <div style={{position: 'relative', maxWidht:'480px'}}>
        <img src={this.state.imgUrl} style={showHideImgStyle}
          alt="camera" />
        <Webcam 
          audio={false}
          ref={this.setRef}
          width={720}
          height={960}
          style={videoStyles}
          screenshotFormat='image/jpeg' 
          videoConstraints={videoConstraints}
         />
        <CircleButton />
      </div>
    )
  }
}
