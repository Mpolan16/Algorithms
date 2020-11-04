// Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

// Examples

// sumDigProd(16, 28) ➞ 6
// // 16 + 28 = 44
// // 4 * 4 =  16
// // 1 * 6 = 6

// sumDigProd(0) ➞ 0

// sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2
// Notes

// The input of the function is at least one number.

function sumDigProd(...args) {
	let n = args.reduce((a,v) => a + v, 0);
	while (n > 9) { n = [...''+n].reduce((a,v) => a * +v, 1); }
	return n;
}