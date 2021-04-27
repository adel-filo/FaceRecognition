import React, { Component } from 'react';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }
  onInputChange=(event)=>{
    this.setState({imageUrl: this.state.input});
  }

onSubmit = () => {
  console.log('click');
}

  render(){

 
  return (

   




    <div className="App">
     
   
     <ImageLinkForm onInputChange={this.onInputChange} 
     onSubmit={this.onSubmit} />
     <FaceRecognition imageUrl={this.state.imageUrl} /> 
     
    </div>
  );
}
}
export default App;
