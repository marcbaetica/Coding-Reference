//takes in a string and reverses it letter by letter and reverses it word by word

var string = new String("Hello World! Life is great!");
//var newArray = new Array();

var reverseStringLetters = function (string) {
	return string.split('').reverse().join('');
}

var reverseStringWords = function (string) {
	return string.split(' ').reverse().join(' ');
}

console.log("Original string: " + string);
console.log("Reversed letters: " + reverseStringLetters(string));
console.log("Reverse by words: " + reverseStringWords(string));