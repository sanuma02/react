import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Rex',age:5},
      {name:'Gigi',age:1}
    ]
  }

  switchNameHandler = () => {
    console.log('Click happened')
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Just a nice p to start.
        </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: eat everything</Person>
      </div>
    );
  }
}

export default App;
