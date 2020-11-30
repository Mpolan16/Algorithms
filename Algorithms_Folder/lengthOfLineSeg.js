// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

// Examples

// lineLength([15, 7], [22, 11]) ➞ 8.06

// lineLength([0, 0], [0, 0]) ➞ 0

// lineLength([0, 0], [1, 1]) ➞ 1.41
// Notes

// The order of the given numbers is X, Y.
// This challenge is easier than it looks.
// Round your result to two decimal places.
//first solution
function lineLength([x1, y1], [x2, y2]) {
	return Number(Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)).toFixed(2));
}
//refactored
function lineLength([x1, y1], [x2, y2]) {
	return +Math.hypot(x1 - x2, y1 - y2).toFixed(2);
}