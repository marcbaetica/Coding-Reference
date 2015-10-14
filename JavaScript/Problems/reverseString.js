//takes in a string and reverses it letter by letter and reverses it word by word

var string = new String("Hello World! Life is great!");
var array = new Array();
var substring = 'eat!';
var element = 'e';	//element to remove from string


var reverseStringLetters = function (string) {
	return string.split('').reverse().join('');
};

var reverseStringWords = function (string) {
	return string.split(' ').reverse().join(' ');
};

var doubleSpaces = function (string) {
	return string.split(' ').join('  ');
}

var checkSubstring = function (string, substring) {
	var exists = string.indexOf(substring);
	if (exists === -1) return false;
	else return true;
}

var removeFromString = function (string, x) {
	//break it into an array of characters
	array = string.split('');
	//look through array and remove designated element if found
	for (var i = 0; i < array.length; i++) {
		if (array[i] == element) {
			array.splice(i, 1);
		}
	}
	//join it at the end
	return array.join('');
};




console.log("Original string: " + string);
console.log("Reversed letters: " + reverseStringLetters(string));
console.log("Reverse by words: " + reverseStringWords(string));
console.log("Inserting double spaces into the string: '" + doubleSpaces(string) + "'")
console.log("Checking to see if substring '" + substring + "'' is part of our original string: " + checkSubstring(string, substring));
console.log("After removing the item '" + element + "' the result was: " + removeFromString(string, element));