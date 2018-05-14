import React from 'react';
import './Person.css';

const person = (props) => {

	const style ={
		'@media(minWidth: 500px)':{
			widht : '450px'
		}
	};
	return (
		<div className="Person" style={style}>
			<p onClick={props.click} >Hey {props.name}, happy {props.age} birthday!!!!!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
		
	)
};

export default person;