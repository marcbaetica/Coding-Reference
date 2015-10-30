//RANDOM TESTS AND NOTES

/*
- typeof(variable)   //returns type of variable

- arrays and objects can be nested

- arrays => .push(x) to add last, .pop() to remove last, .shift() to remove first, .unshift(x) to add first

- object properties => myDog.bark = "arf!"; adds property bark to object while delete myDog.tails; deletes the tail property

- (function (x) {return x})(aVariable)   //executes the function with given parameter x

- if (x !== "undefined") {(function () {return 10;})()}   //checking for a variable value before sending executing the function

- declare (var x) outside a loop and (x = value) inside a loop VS just doing (var x = value) inside a loop
http://stackoverflow.com/questions/3684923/javascript-variables-declare-outside-or-inside-loop
There is absolutely no difference in meaning or performance, in JavaScript or ActionScript.
VAR IS A DIRECTIVE TO THE PARSER AND NOT A COMMAND EXECUTED AT RUN-TIME. If a particular identifier has been declared var once or more anywhere in a function body(*), then all use of that identifier in the block will be referring to the local variable. It makes no difference whether value is declared to be var inside the loop, outside the loop, or both.
it might make your code cleaner to read with var declaration outside the loop but it also makes your code longer and ads on extra process to run through on your clock.

- === strict comparison while == converts the operands' type first and then makes the comparison

- for using this:
  - strict-mode =
  - non-strict-mode = 

- differences in function definition, array definition, ...

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




// String.replace
//


// String.toLowerCase -> unlike .toLocaleLowerCase() which mutates the original string
//



//finding the longest word
function findLongestWord(str) {
  
  var wordCount = 0;
  var champion = 0;
  var strArray = str.split('');
  console.log(str.split(''));
  
  for (var i=0; i<str.length; i++) {
    if (strArray[i] !== ' ') {
      wordCount++;
      console.log("not space " + strArray[i]);
    }
    if (strArray[i] === ' ') {
      if (wordCount>=champion) {

        console.log("space " + strArray[i]);

        champion = wordCount;
        console.log("Champion Set! " + champion);


        wordCount = 0;
      }
      else {console.log("Smaller");}
        wordCount = 0;
    }
  }
  //for end
  if (wordCount>=champion) {

        champion = wordCount;
        console.log("Champion Set! " + champion);
  
  }  
  
  
  console.log(champion);
}


findLongestWord("What if we try a super-long word such as otorhinolaryngology");



console.log('\n');




// String.charAt(index)
//selects and returns a particular character at a given location within the string... good if we want to modify that particular element and append back the rest
// String.slice(beginIndex, [endIndex])
//creates and returns a new string sliced from a particular index of interest onward up to (but excluding endIndex)
//String.toUpperCase(element);
//to detail

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  
  
  //make all lwc
  var modifiedStr = str.toLowerCase();

  //make first to uppercase
  modifiedStr = modifiedStr.charAt(0).toUpperCase() + modifiedStr.slice(1);
  
  //make uppercase if space is encountered 
  for (var i=1; i<str.length; i++) {
    if (modifiedStr.charAt(i)===' ') {
      modifiedStr = modifiedStr.slice(0, i+1) + modifiedStr.charAt(i+1).toUpperCase() + modifiedStr.slice(i+2);
    };

  };

  //return string
  console.log(modifiedStr);
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("Short And Stout");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

/*
//NOTE: look into

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
You could also add it to the String.prototype so you could chain it with other methods:

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
and use it like this:

'string'.capitalizeFirstLetter() // String
*/




console.log('\n');




// 4 arrays into an array => find highest value in each array and store result in a final 4 element array

function largestOfFour(arr) {
  
  //our final 4 champion element array with the champion variable
  var finArray = [];
  var champion = 0;
  
  //for each small array
  arr.forEach(function (smallArray) {
    //iterate through small array and find champion
    smallArray.forEach(function (x) {
      if (champion < x) {
        champion = x;
      }
    });
    //store champion into the final array and reset champion
    finArray.push(champion);
    champion = 0;
  });
  
  console.log(finArray);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);





console.log('\n');




// String.substr(start[, length])
//method returns the characters in a string beginning at the specified location through the specified number of characters.
//If a negative number is given, it is treated as strLength + start where strLength is the length of the string (for example, if start is -3 it is treated as strLength - 3.)


//Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
  //bool variable to check if string ends with the given target
  var doesEnd = false;

  //return last characters of string and check with target
  if (str.substr(-(target.length)) === target) {
    doesEnd = true;
  }

  //output
  console.log("Does '" + str + "' end in '" + target + "'? " + doesEnd);
}

end("Bastian", "n");
end("He has to give me a new name", "me");
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");





console.log('\n');




// String.slice()
//

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." (included in the final count) 


function truncate(str, num) {
  
  //if string length is larger than number, slice it and add "..." @ end
  if (str.length > num) {
    //if string to be sliced under 3 characters
    if (str.length < 3) {
     str = str.slice(0, num);
     str += "...";
     console.log(str);
     return;
    }
    //else
    str = str.slice(0, num-3);
    str += "...";
  }
  //else return the same
  
  console.log(str);
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); //should return "A-tisket a-tasket A green and yellow basket".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); //should return "A-tisket a-tasket A green and yellow basket".
truncate("A-", 1);





console.log('\n');


// Array.split();

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

function chunk(arr, size) {
  // Break it up.
  var finArray = [];
  var pushArray = [];
  var i=0;
  //this has to repeat until there are no more elements in the array
  for (var x = 1; x<arr.length/size+1; x++) {
    for (true; i<size*x; i++) {
      pushArray.push(arr[i]);
      //avoid adding nulls in the last array
      if (i >= arr.length-1) {break;}
    } 
    finArray.push(pushArray);
    pushArray = [];
    //size = size+size;
  }
  console.log(finArray);
}

chunk(["a", "b", "c", "d"], 2);
chunk([0, 1, 2, 3, 4, 5], 4);





console.log('\n');


// Array.filter() -> faster than Array.splice()
//creates a new array with all elements that pass the test implemented by the provided function

//Remove all falsy values (in javascript => false, null, 0, "", undefined, and NaN) from an array.


function bouncer(arr) {
  
  arr = arr.filter(function (x) {
    
    if (x !== false && x !== null && x !== 0 && x !== "" && x !== undefined && x !== NaN) {
      return x;
    }
  });
  console.log(arr);
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);





console.log('\n');




// Generate Fibonaci Sequence until value reaches 4 million
// Return the total sum of all values that 

//version 1 - initial solution
var evenSum = 0;  //this gets returned and printed at the end 
var variable1 = 0;  //first "pointer" variable starting at 0
var variable2 = 1;  //second "pointer" variable starting at 1



function returnEvenSum () {
  console.log(4*10^6);
  //generates Fibonaci Sequence two values at a time -> problem 
  while (variable1 < 4*10^6 && variable2 < 4*10^6) {
    //console.log(variable1);
    

    //two new numbers get generated in one loop
    variable1 += variable2;
    variable2 += variable1;

    //checks if either of the two variables are even and adds that number to the final sum
    checkIfEven(variable1);

    //since this is evaluating two elements at the same time
    //we need to break if the newly second element is larger than 4M 
    if (variable2) {  //repeat this for both

    }

    //otherwise compare this number as well
    checkIfEven(variable2);
  }

  //returns the final evenSum
  return evenSum;
}


//checks if the new number is even and adds it to the final sum
function checkIfEven (num) {
  if (num%2 === 0) {
    evenSum += num;
  } 
}

returnEvenSum();
console.log(evenSum); //final sum


//version 2 - recursion