# react

**let and const**

let: old var keyword, use it when is set to a value that may actually change

const: use it when you the value is indeed a constant value

```
const Name = 'Rexy';
console.log(Name);
Name = 'Gigi'
console.log(Name);
```

Previus code will show error on trying to change a const value (var or let will work just fine)
* Note use https://jsbin.com/ to quickly test code.

**Arrow Function**

Different way to create JS functions: name + arguments + => + body:

```
const printName = (name) => {
  console.log(name);
}
```
If the fuction receives only one paramater parenthesis may be removed:
```
const printName = name => {
  console.log(name);
}
```

However is only works under that scenario, more then one pamater or none must have "()"

Other option to short functions up is when you have a function that only returns a value it can be written on one line as follows:

```
const mult = number => {
  return number * 5
}

Can be written as:

const mult = number =>  number * 5
```

**Modular Code**

Exports and Imports are used to manage modular JS code
Files can have several exports (const or functions), the keyword "default" especifies what code will be exported as default:

file dog.js:
```
const dog = {
name: 'Rexy'
}
export default dog
```
Then it can be imported as follows:

file app.js
```
import dog from './dog.js'
import dg from './dog.js'
```
On default export you can choose the name freely

A regular export will look like this:

file utility.js
```
export const clean = () => {...}
export const baseData = 10 
```
So importing file will look like:

file app.js
```
import dog from './dog.js'
import dg from './dog.js'
import {baseData} from './utility.js' or import {baseData as bD} from './utility.js'
import {clean} from './utility.js' or import {clean as cl} from './utility.js'

An object can be as well bundled to be imported:
import * as bundled from './utility.js'
```

**Classes**

Inheritance
```
class Animal {
  
  constructor(){
    this.gender = "Male";
  }
  
  printGender(){
    console.log(this.gender);
  }
}

class Dog extends Animal {
  
  constructor(){
    super();
    this.name = "Rexy";
  }
  printName(){
    console.log(this.name);
  }
}

const dog = new Dog();
dog.printGender()
dog.printName()
```

Next Generation JS syntax ES6/Babel:

```
class Animal {
  

  gender = "Male";

  printGender = () => {
    console.log(this.gender);
  }
}

class Dog extends Animal {
 
  name = "Rexy";

  printName = () => {
    console.log(this.name);
  }
}

const dog = new Dog();
dog.printGender()
dog.printName()
```
**Spread & Rest**

Spread: used to copy values from an object 
```
const numbers = [1,2,3];
const newNumbers = [...numbers, 4,5]
console.log(newNumbers)

const dog = {
  name: "Rexy"
};

const newDog = {
  ...dog,
  age: 4
};

console.log(newDog)
```

Rest: used to maange n number or paramaters into an array
```
const filter = (...args) => {
  return args.filter(el => el === 1)
}
console.log(filter(1,2,3))
```
**Destructuring**

Used similar to a tuple assignation on Python:
```
const numbers = [1,2,3];
[a,b] = numbers
console.log(a,b)
```
It works also with objects

**Reference and Primitive Types**

Primitive types create copy of values when they are assign to a second value.
Arrays and Object dont, they create a variable pointing to the original obcject, unless you actually copy all the object:

```
const person = {
  name:"Max"
};

const secondPerson = {
  ...person,
  age:34
};

console.log(secondPerson)

```

**Remember JS Array Functions**

```
const numbers = [1,2,3]
const doubleNum = numbers.map((num) =>{ return num * 2});
console.log(doubleNum)
```
- map()
- find()
- findIndex()
- filter()
- reduce()
- concat()
- slice()
- splice()


# render on React

The following render code:

```
class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Just a nice p to start.
        </p>
      </div>
    );
  }
}
```
It is equivalanrt to have:
```
class App extends Component {
  render() {
    return React.createElement('div',{className: 'App'}, React.createElement('p',null,'Just a nice p to start'));
  }
}
```

JSX code on first option looks like HTML but it is not, is actually Javascript code that is compiled. Some keywords reserved keywords on HTML can not be used on JSX like class, so className is used instead.

**Events**

Review https://reactjs.org/docs/events.html#supported-events 


# Components Functional (Stateless) and Class (Stateful) 

On functional ones since it does not inherits from Component then state is not known, state is not used, functional components are simple, they render objects to the DOM but should not change the state of the application.

Components that do change the state of an application are Class ones and often called containers, components that do not change the state are function ones and are just called components.

On Containers, the keyword "this" is used and on regular components state vars are passed via the props feature.

Container can also access the props feature if needed, however the syntax to do so goes like this: this.props.someproperty


# Component Lifecycle - for Stateful Components -

- constructor()
- componentWillMount()
- componentDidCatch()
- render()
- ...

**Creation** 

- constructor(props): Optional, must call the super(props) (Component parent method), inititialize the state, not for backend calls or reaching out to other pages.
- componenetWillMount(): Legacy code, can be use to execute som optimization, not usually used.
- render(): used to prepare and structure JSX code. -- Renders child components
- componentDidMount(): not use to update state, calls to backend or pages can be done here





