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

** Classes **

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











