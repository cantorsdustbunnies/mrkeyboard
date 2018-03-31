import React, { Component } from 'react';
import TitleScreen from './components/TitleScreen'; 

import FilmNoise from './components/FilmNoise'; 
import Screen from './components/Screen'; 
import './App.css';
import edges from './images/edges.png'; 


class App extends Component {
  constructor(props){ 
    super(props); 
    this.state = { 
      windowWidth: 0, 
      windowHeight: 0, 
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this); 
  }

  componentDidMount(){ 
    this.updateWindowDimensions(); 
    window.addEventListener('resize', this.updateWindowDimensions); 
  }

  componentWillUnmount() { 
    window.removeEventListener('resize', this.updateWindowDimensions); 
  }

  updateWindowDimensions() { 
    this.setState({ 
      windowWidth: window.innerWidth, 
      windowHeight: window.innerHeight, 
    })
  }

  render() {
    return (
      <div className="App">
        <Screen /> 
        <img src={edges} className="edges"/> 
        <FilmNoise /> 
      </div>
    );
  }
}

export default App;
