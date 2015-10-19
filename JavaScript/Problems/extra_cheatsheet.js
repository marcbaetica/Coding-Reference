//RANDOM TESTS AND NOTES

/*
- typeof(variable)   //returns type of variable

- arrays and objects can be nested

- arrays => .push(x) to add last, .pop() to remove last, .shift() to remove first, .unshift(x) to add first

- object properties => myDog.bark = "arf!"; adds property bark to object while delete myDog.tails; deletes the tail property

- (function (x) {return x})(aVariable)   //executes the function with given parameter x

- if (x !== "undefined") {(function () {return 10;})()}   //checking for a variable value before sending executing the function


*/





//object properties manipulation
var myCar = {
    brand: "Bacon’s Automobile",
    motor: "7.0 Master Turbo Plus",
    color: "Bacon Brown"
}

console.log(myCar);
delete myCar.color;	//remove property
console.log(myCar);
myCar.year = 2015;	//add property
console.log(myCar);
console.log('\n');



//asynchronous callbacks
console.log("hello!");

setTimeout(function callback() {
	console.log("Hello world from the timeout!");
}, 0);

function two () {
	console.log("Hello World from the second function!");
};

two();


//math random
var min = 3;
var max = 9;
var random_N = Math.random();
console.log(random_N);	//random number
console.log(Math.floor(random_N*10));	//random number 0-10 rounded down to the nearest integer
console.log(Math.floor((max-min+1) * random_N) + min);	//random number withing range ... +1 so it doesnt exclude max



//Sift through Text with REGULAR EXPRESSIONS
/*Regular expressions are used to find certain words or patterns inside of strings.
For example, if we wanted to find the word the in the string The dog chased the cat, we could use the following regular expression: /the/gi

the is the pattern we want to match.
g means that we want to search the entire string for this pattern instead of just the first match.
i means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.

Regular expressions are written by surrounding the pattern with / symbols.*/

var test = (function() {
  var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

  var expression = /and/gi;
  var digit = /\d+/g;		//For finding numbers within a string this is often written as /\d+/g, where the + following the digit selector allows this regular expression to match multi-digit numbers.
  var whitespaces = /\s+/g;	//The whitespace characters are " " (space), \r (carriage return), \n (newline), \t (tab), and \f (form feed).
  var expression = /\S/g;	//You can invert any match by using the uppercase version of the selector \s versus \S for example.

  return testString.match(expression).length;
})();

(function(){console.log(test);})();