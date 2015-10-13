//given two arrays find common values
//this version also checks and discards element if it already exists within the final result set
//verbose version

var a1 = [1,2,3,4,5];
var a2 = [3,2,9,3,7];
var count = 0;
var finalArray = new Array();
var alreadyExists;

a1.forEach(function (item1){
	a2.forEach(function (item2) {
		if (item1 == item2) {
			console.log("Found potential common element " + item1 + ".");

			alreadyExists = false;
			//if element doesnt already exist
			for(i=0; i<count+1; i++) { //can also be done with forEach for finalArray
				console.log("Comparing common element " + item1 + " with final array element " + finalArray[i])
				if (item1 == finalArray[i]) {
					console.log("Problem: element already exists within final result. No longer adding " + item1 + " to our results set.");
					alreadyExists = true;
					break;
				}
			}

			//add element to array
			if (alreadyExists == false) {
				finalArray.push(a1[a1.indexOf(item1)]);	//or better finalArray.push(item1);
				count++;
				console.log("\nThe array is now [" + finalArray + "] and the current count is " + count + "\n");
			}
		}
	})
});

console.log("\nDone. The final array is: [" + finalArray + "]");