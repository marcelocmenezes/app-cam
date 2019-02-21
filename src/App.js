import React, { Component } from 'react';
// import CircleButton from './CircleButton';
// import Webcam from "react-webcam"

import WebcamPhoto from './WebcamPhoto'


class App extends Component {
  constructor(props){
    super(props)
    this.state = { dataUri: '' }
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,textAlign: 'center' , margin: '0 auto' }}>
        <p>Teste</p>
        <WebcamPhoto dataUri={this.state.dataUri} getPicture={ img => this.setState({dataUri: img}) } />
      </div>
    )
  }
}


export default App