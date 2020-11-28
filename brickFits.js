// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).

// Examples

// doesBrickFit(1, 1, 1, 1, 1) ➞ true

// doesBrickFit(1, 2, 1, 1, 1) ➞ true

// doesBrickFit(1, 2, 2, 1, 1) ➞ false
// Notes

// You can turn the brick with any side towards the hole.
// We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
// You can't put a brick in at a non-orthogonal angle.

// Resouce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // expected output: true
