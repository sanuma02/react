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

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Rexy';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Gigi', age: 29 },
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Rex', age: 28 },
        { name: event.target.value, age: 29 },
      ]
    } )

  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Just a nice p to start.
        </p>
        <button onClick={() => this.switchNameHandler('Rexy Jose!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Rexy!')}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} >Hobbies: eat everything</Person>
      </div>
    );
  }
}

export default App;
