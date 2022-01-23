//require vs import
// ES5
var React = require('react');
 
// ES6
import React from 'react';



//export vs exports

// ES5
module.exports = Component;
 
// ES6
export default Component;

//components vs functions
// ES5
var MyComponent = React.createClass({
    render: function() {
        return
 
<h3>Hello Edureka!</h3>
;
    }
});
 
// ES6
class MyComponent extends React.Component {
    render() {
        return
 
<h3>Hello Edureka!</h3>
;
    }
}



//props
// ES5
var App = React.createClass({
    propTypes: { name: React.PropTypes.string },
    render: function() {
        return
 
<h3>Hello, {this.props.name}!</h3>
;
    }
});
 
// ES6
class App extends React.Component {
    render() {
        return
 
<h3>Hello, {this.props.name}!</h3>
;
    }
}



//state

// ES5
var App = React.createClass({
    getInitialState: function() {
        return { name: 'world' };
    },
    render: function() {
        return
 
<h3>Hello, {this.state.name}!</h3>
;
    }
});
 
// ES6
class App extends React.Component {
    constructor() {
        super();
        this.state = { name: 'world' };
    }
    render() {
        return
 
<h3>Hello, {this.state.name}!</h3>
;
    }
}



//23. How do you create an event in React?

class Display extends React.Component({    
    show(evt) {
        // code   
    },   
    render() {      
        // Render the div with an onClick prop (value is a function)        
        return (            
           
            <div onClick={this.show}>Click Me!</div>
 
        );    
    }
});


//Ref --reference 

class ReferenceDemo extends React.Component{
     display() {
         const name = this.inputDemo.value;
         document.getElementById('disp').innerHTML = name;
     }
render() {
    return(        
          
<div>
            Name: <input type="text" ref={input => this.inputDemo = input} />
            <button name="Click" onClick={this.display}>Click</button>            
          
<h2>Hello <span id="disp"></span> !!!</h2>
 
      </div>
    );
   }
 }


 //Without using JSX, we would have to create an element by the following process:

const text = React.createElement('p', {}, 'This is a text');
const container = React.createElement('div','{}',text );
ReactDOM.render(container,rootElement);
// Using JSX, the above code can be simplified:

const container = (
<div>
  <p>This is a text</p>
</div>
);
ReactDOM.render(container,rootElement)


//Functional components are nothing but JavaScript functions and therefore can be declared using an arrow function or the function keyword:

  function card(props){
   return(
      <div className="main-container">
        <h2>Title of the card</h2>
      </div>
    )
   }
   const card = (props) =>{
    return(
      <div className="main-container">
        <h2>Title of the card</h2>
      </div>
    )
   }
//Class components, on the other hand, are declared using the ES6 class:

 class Card extends React.Component{
  constructor(props){
     super(props);
   }
    render(){
      return(
        <div className="main-container">
          <h2>Title of the card</h2>
        </div>
      )
    }
   }


   function sum(h){
       return
   }
   sum(1,2);
   
//this key word

function doSomething() {
  console.log(this);
}
doSomething();
//output --- global object

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
        
obj.getName();

//output---vivek

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
        
}
        
var getName = obj.getName;      
var obj2 = {name:"akshay", getName };
obj2.getName();

//output --- akshay


//closure

function OuterFunction() {

    var outerVariable = 100;

    function InnerFunction() {
        alert(outerVariable);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); // 100


//bind
Bind( )
//The bind method creates a new function and sets the this keyword to the specified object.
//Syntax:
function.bind(thisArg, optionalArguments)

//example
const john1 = {
  name: 'John',
  age: 24,
};
function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}
const greetingJohn = greeting.bind(john1);
// Hi, I am John and I am 24 years old
greetingJohn();


Call ( )
//The call method sets the this inside the function and immediately executes that function.
//The difference between call() and bind() is that the call() sets the this keyword and executes the function immediately and it does not create a new copy of the function, while the bind() creates a copy of that function and sets the this keyword.
//Syntax:
function.call(thisArg, arg1, agr2, ...)

function greet(greeting) {
 // console.log(l,k)
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: 'John',
  age: 24,
};
//hi,en
// Hi, I am John and I am 24 years old
greet.call(john, 'Hi');



Apply ( )
The apply() method is similar to call(). The difference is that the apply() method accepts an array of arguments instead of comma separated values.
Syntax:
function.apply(thisArg, [argumentsArr])

function greet(greeting, lang) {
  console.log(lang);
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: 'John',
  age: 24,
};
//en
// Hi, I am John and I am 24 years old
greet.apply(john, ['Hi', 'en']);



//currying

function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12

//scope chain
var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }

  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}


favFunction();


//Rest

function addAllArgs(...args){
  let sumOfArgs = 0;
  let i = 0;
  while(i < args.length){
    sumOfArgs += args[i];
    i++;
  }
  return sumOfArgs;
}

addAllArgs(6, 5, 7, 99); // Returns 117
addAllArgs(1, 3, 4); // Returns 8


//spread
function addFourNumbers(num1,num2,num3,num4){
  return num1 + num2 + num3 + num4;
}

let fourNumbers = [5, 6, 7, 8];


addFourNumbers(...fourNumbers);
// Spreads [5,6,7,8] as 5,6,7,8