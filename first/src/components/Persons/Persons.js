import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component{

    shouldComponentUpdate(nextProps,nextState){
        console.log("Should component update call!!!!!!!!! on Persons.js");
        return nextProps.persons !== this.props.persons;
      }


    render(){
        return this.props.persons.map((person,index) => {
            return <Person 
            key={person.id}
            name={person.name} 
            age={person.age} 
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event,person.id)}/>
          });

    }

} 

export default Persons; 