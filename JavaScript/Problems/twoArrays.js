//given two arrays find common values

var a1 = [1,2,3,4,5];
var a2 = [3,2,9,3,7];
var finalArray = new Array();

a1.forEach(function (item1, index1){
	a2.forEach(function (item2, index2) {
		if (item1 == item2) {
			finalArray.push(a1[a1.indexOf(item1)])
		}
	})
});

console.log(finalArray);