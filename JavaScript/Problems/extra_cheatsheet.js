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