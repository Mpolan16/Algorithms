// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples

// isAvgWhole([1, 3]) ➞ true

// isAvgWhole([1, 2, 3, 4]) ➞ false

// isAvgWhole([1, 5, 6]) ➞ true

// isAvgWhole([1, 1, 1]) ➞ true

// isAvgWhole([9, 2, 2, 5]) ➞ false

function isAvgWhole(arr) {
	//if empty arr.length === 0, return false
	if(arr.length === 0)return false;
	//add the array
		var sum=0;
for ( var i=0; i<arr.length; i++){
	sum+=arr[i];
}
	// and divide by arr.length
	var avg = sum/arr.length;
	//if statement of the avg having a decimal
	if (Number.isInteger(avg)){
		//return true if it stops at whole
			return true;
			}else{
			//return false if decimal..
		return false;
	}	
}

// REFACTORED

const isAvgWhole = arr => (arr.reduce((a, b) => a + b) / arr.length) % 1 === 0;