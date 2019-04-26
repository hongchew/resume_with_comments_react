import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Resume from "./Resume/Resume"



class App extends Component {
  constructor(){
    super();
    this.state = {
      comments : {}
    };
  }

  render(){
    return (
      <div className="App">
        <Resume/>
      </div>
      
    );
  }
}

export default App;
