//RANDOM TESTS AND NOTES

/*
- typeof(variable)   //returns type of variable

- arrays and objects can be nested

- arrays => .push(x) to add last, .pop() to remove last, .shift() to remove first, .unshift(x) to add first

- object properties => myDog.bark = "arf!"; adds property bark to object while delete myDog.tails; deletes the tail property

- (function (x) {return x})(aVariable)   //executes the function with given parameter x

- if (x !== "undefined") {(function () {return 10;})()}   //checking for a variable value before sending executing the function

- for using this:
  - strict-mode =
  - non-strict-mode = 

- when to use JSON.stringify on console.log() .. also not on arrays

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

//for asynchronous
/*
setTimeout(function callback() {
	console.log("Hello world from the timeout!");
}, 0);
*/

function two () {
	console.log("Hello World from the second function!");
};

two();






console.log('\n');






//math random
var min = 3;
var max = 9;
var random_N = Math.random();
console.log(random_N);	//random number
console.log(Math.floor(random_N*10));	//random number 0-10 rounded down to the nearest integer
console.log(Math.floor((max-min+1) * random_N) + min);	//random number withing range ... +1 so it doesnt exclude max








console.log('\n');






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








//Closures -- TO FIX

function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    console.log(JSON.stringify(lastName));
}

var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.

// The closure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
//mjName ("Jackson"); // This celebrity is Michael Jackson

//NOTE: Need to figure out how "Jackson" isn't replacing "Michael"







console.log('\n');


//Arrays

var ourArray  = [1, 2, 3, 4, 5];



// Array.map()
//iterates over a list + creates a new array
//applies a function to each element
//and emits the result as the new array (if you want to apply some changes to each element you should use map - converting a list of strings to uppercase)

var newArray = ourArray.map(function (val) {
  return val+1;
});


(function () {console.log(ourArray)}) ();

(function () {console.log(newArray)}) ();


// Array.forEach()
//iterates over a list
//and applies some operation with side effects on the original array to each list member (eg: saving each one to the database or if you want just iterate over all element you should use forEach)

var ourNewArray = new Array();

var forEachFunction = Array.prototype.forEach;
forEachFunction.call(ourArray, function (element, index) {
  ourNewArray[index] = element;
});

//that generica call was same as saying ourArray.forEach(callback);

console.log('The expected same array = ' + ourNewArray);


//as generical call
var mapFunction = Array.prototype.map;
var stringToArray = mapFunction.call('Hello World!', function(x) {return x});

console.log(stringToArray);




// Array.reduce
//reduces array by iterating through array and adding the new value to previous (from index 1 to index length-1)
//returns final sum

var arraySum = ourArray.reduce(function (previousItem, currentItem, index) {
    return previousItem + currentItem;
});

console.log('The sum for ourArray was: ' + arraySum);




// Array.filter
//creates new array and fills it in with the elements that pass the condition
//returns the array at the end

var arrayToFilter = [1,2,3,4,5,6,7,8,9,10];

var filteredArray = Array.prototype.filter.call(arrayToFilter, function (value) {
  return value >= 5;  //only pass in values larger or equal to 5
});

console.log("After filtering for values larger than or equal to 5 we get: " + filteredArray);




// Array.sort
//sorts array alphabeticallt/numerically growing
//manipulates and returns the same array
//optional argument passed in for comparing function for defining order

var arrayToSort = ['beta', 'alpha', 'charlie'];

console.log("The newly sorted array is: " + arrayToSort.sort());



// Array.reverse
//method transposes the elements of the calling array object in place
//modifies the array and returns a refference to the array

var arrayToReverse= [1,2,3,4,5,6,7];

console.log("The newly reversed array is: " + arrayToReverse.reverse());



// Array.concat
//returns new array with added values (@ end of array obviously)
//argument can also be another array that can be appended
//does not alter the old array -> just makes and returns a new one


var array1 = [1,2,3];
var concatMe = [4,5,6];

array1 = array1.concat(concatMe);
console.log("The newly concatenated array is: " + array1);




// String.split(' ')
//creates and returns an array of elements divided by (element) argument (without includeing the element -> eg: space)


var stringToSplit = "Split me into an array";

var splittedArray = stringToSplit.split(' ');
console.log("The newly splitted string into an array is: "+ splittedArray);




// Array.join(' ')
//creates and returns a string with (element) argument separating each time two strings are appended

var joinMe = ["Split","me","into","an","array"];

joinMe = joinMe.join(" ");
console.log("The newly joined array into a string is: " + joinMe);