import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Just a nice p to start.
        </p>
        <Person name="Rex" age="5"/>
        <Person name="Gigi" age="1">Hobbies: eat everything</Person>
      </div>
    );
  }
}

export default App;
