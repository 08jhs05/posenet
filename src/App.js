import React from "react";
import dva from './dva.jpg';
import './App.css';
import "@tensorflow/tfjs";
const posenet = require('@tensorflow-models/posenet');

class App extends React.Component {

  componentDidMount() {
    async function estimatePoseOnImage(imageElement) {
      // load the posenet model from a checkpoint
      const net = await posenet.load();

      const pose = await net.estimateSinglePose(imageElement, {
        flipHorizontal: false
      });
      return pose;
    }
    const imageElement = document.getElementById('dva');

    const pose = estimatePoseOnImage(imageElement);

    pose.then( (res) => {
      console.log(res);
    });
  }
  
  render() {
    return(<div className="App">
      <header className="App-header">
        <img src={dva} alt="logo" id="dva"/>
      </header>
    </div>);
  }
}

export default App;