import React, { Component } from 'react';
import TitleScreen from './components/TitleScreen'; 
import Overlay from './components/Overlay'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleScreen >
          <Overlay className="overlay"/> 
        </TitleScreen> 
      </div>
    );
  }
}

export default App;
