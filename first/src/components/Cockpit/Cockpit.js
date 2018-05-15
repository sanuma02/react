import React from 'react';
import classes from  './Cockpit.css';

const cockpit = (props) => {

    const assingedClasses = [];
    let btnClass = " ";
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length === 2){
      assingedClasses.push(classes.red);
    }
    if(props.persons.length === 1){
      assingedClasses.push(classes.bold);
    }

	return (
		<div className={classes.Cockpit}>
            <p className={assingedClasses.join(' ')}>
              Just a nice p to start.
            </p>
            <button onClick={ props.clicked} className={btnClass}>Toggle div</button>
		</div>
		
	)
};

export default cockpit; 