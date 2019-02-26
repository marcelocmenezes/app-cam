import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from './IconButton';
import Webcam from "react-webcam"

import './WebcamPhoto.css'

const videoConstraints = { aspectRatio: 0.75, frameRate: { max: 60 }, facingMode: { exact: "user" }}

class WebcamPhoto extends Component {
    constructor(props){
        super(props)
        this.state = { isShowVideo: true }
        this.setRef = this.setRef.bind(this)
        this.getScreenshot = this.getScreenshot.bind(this)
    }
    
    screenshotToProps(dataUrl) {
        this.props.getPicture(dataUrl)
    }

    setRef (webcam) {
        this.webcam = webcam
    }
    
    getScreenshot()  {
        let dataUri
        
        if(this.state.isShowVideo){
            dataUri = this.webcam.getScreenshot()
            this.setState({isShowVideo: false})
        } else {
            dataUri = ''
            this.setState({isShowVideo: true})
        }

        this.screenshotToProps(dataUri)
    }
      
    render() {
        const videoStyle = this.state.isShowVideo ? { display: 'inline-block', height: '100%', width:'100%', transform: 'rotateY(180deg)' } : { display: 'none' }
        const imgStyle = !this.state.isShowVideo ? {display: 'inline-block', height: '100%', width:'100%', transform: 'rotateY(180deg)'} : {display: 'none'};

        return (
            <div style={{position: 'relative'}}>
            <Webcam 
            audio={false}
            ref={cam => this.setRef(cam)}
            style={videoStyle}
            screenshotFormat='image/jpeg' 
            videoConstraints={videoConstraints}
            />

            <img src={this.props.dataUri} rel='' style={imgStyle} />

            <IconButton onClick={ this.getScreenshot } isClicked={!this.state.isShowVideo}/>
        </div>
        )
    }
}

WebcamPhoto.propTypes = {
    dataUri: PropTypes.string.isRequired,
    getPicture: PropTypes.func.isRequired
}

export default WebcamPhoto