// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

// Examples

// findBob(["Jimmy", "Layla", "Bob"]) ➞ 2

// findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0

// findBob(["Jimmy", "Layla", "James"]) ➞ -1

function findBob(names) {
	return names.indexOf('Bob');
}

// if it is false it auto returns -1;