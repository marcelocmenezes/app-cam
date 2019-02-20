import React, { Component } from 'react';
import CircleButton from './CircleButton';
import Webcam from "react-webcam"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      dataUri: '',
      isShowVideo: true,
    }

    this.setRef = this.setRef.bind(this)
    this.getScreenshot = this.getScreenshot.bind(this)
  }

  setRef (webcam) {
    this.webcam = webcam
  }


  getScreenshot()  {
    if(this.state.isShowVideo){
    let dataUri = this.webcam.getScreenshot()
    this.setState({dataUri, isShowVideo: false})
    } else {
      this.setState({dataUri: '', isShowVideo: true})
    }


  }
  
  render() {
    const videoConstraints = {
      aspectRatio: 0.75,
      frameRate: { max: 60 },
      facingMode: "user"
    }

    const videoStyle = this.state.isShowVideo ? { display: 'inline-block', height: '100%', width:'100%', transform: 'rotateY(180deg)' } : { display: 'none' }
    const circleButtonStyle = this.state.isShowVideo ? { } : { display: 'none' }

    const imgStyle = !this.state.isShowVideo ? {display: 'inline-block', height: '100%', width:'100%', transform: 'rotateY(180deg)'} : {display: 'none'};

    return (
      <div style={{position: 'relative', maxWidth:'320px'}}>
        <Webcam 
          audio={false}
          ref={cam => this.setRef(cam)}
          style={videoStyle}
          screenshotFormat='image/jpeg' 
          videoConstraints={videoConstraints}
         />

         <img src={this.state.dataUri} rel='' style={imgStyle} />

        <CircleButton onClick={ this.getScreenshot } style={circleButtonStyle} isClicked={!this.state.isShowVideo}/>
      </div>
    )
  }
}


export default App