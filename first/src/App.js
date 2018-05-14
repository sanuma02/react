import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'1',name:'Rex',age:5},
      {id:'2',name:'Gigi',age:1}
    ],
    showPersons: false
  }



  nameChangedHandler = (event, id) => {
    //get the correct person
    const personIndex = this.state.persons.findIndex(p => {return p.id === id;});
    const person = {...this.state.persons[personIndex]}; //copy the person to not mutate the original
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons:persons} )

  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice(); copy on a new const as an effort to not mutate the original state
    const persons = [...this.state.persons]; //JS function to copy
    persons.splice(index,1);
    this.setState({persons:persons});

  }

  togglePersonsHandler = () => {
    const toShow = this.state.showPersons;
    this.setState({showPersons: !toShow});
  }

  


  render() {

    let persons = null;
    let btnClass = " ";

    if (this.state.showPersons){
      persons = (
        <div>
        {
          this.state.persons.map((person,index) => {
            return <Person 
            key={person.id} 
            name={person.name} 
            age={person.age} 
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })
        }
      </div>
      );
      btnClass = classes.Red;

    }

    const assingedClasses = [];
    if(this.state.persons.length === 2){
      assingedClasses.push(classes.red);
    }
    if(this.state.persons.length === 1){
      assingedClasses.push(classes.bold);
    }
    

    return (
        <div className={classes.App}>
          <p className={assingedClasses.join(' ')}>
            Just a nice p to start.
          </p>
          <button onClick={ this.togglePersonsHandler} className={btnClass}>Toggle div</button>
          {persons}
  

        </div>
    );
  }
}

export default App;
