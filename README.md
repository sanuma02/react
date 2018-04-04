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






