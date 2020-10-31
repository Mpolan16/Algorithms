// Write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.

// To illustrate:

// maxPossible(9328, 456) ➞ 9658
// // 9658 is the largest possible number built from swaps from 456.
// // 3 replaced with 6 and 2 replaced with 5.
// Examples

// maxPossible(523, 76) ➞ 763

// maxPossible(9132, 5564) ➞ 9655

// maxPossible(8732, 91255) ➞ 9755
// Notes

// Each digit in the second number can only be used once.
// Zero to all digits in the second number may be used.

function maxPossible(n1, n2) {
	var a1 = (""+n1).split('');
	var a2 = (""+n2).split('').sort(function(a,b){
		return b-a;
	});
	for (var i in a1) {
		if (a1[i] < a2[0]) {
			a1[i] = a2.shift();
		}
	}
	return a1.join('') | 0;
}