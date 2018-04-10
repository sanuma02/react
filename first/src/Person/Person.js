import React from 'react';

const person = (props) => {
	return (
		<div>
			<p>Hey {props.name}, happy {props.age} birthday!!!!!</p>
			<p>{props.children}</p>
		</div>
		
	)
};

export default person;