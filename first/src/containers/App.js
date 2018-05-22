import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    //state could be setup here
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount call');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount call');
  }

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

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("Should component update call!!!!!!!!! on App.js");
  //   return true;
  // }


  render() {
    console.log('[App.js] inside of render')

    let persons = null;
   

    if (this.state.showPersons){
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>

        </div>
        );


    }

    return (
        <div>
          <button onClick={() => {this.setState({showPersons: true})}}> Show Persons </button>
          <Cockpit clicked={this.togglePersonsHandler} persons = {this.state.persons} appTittle={this.props.tittle}/>
          {persons}
        </div>
    );
  }
}

export default App;
