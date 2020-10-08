// Create a function that takes a string and returns a new string with all vowels removed.

// Examples
// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"

// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
// Notes
// "y" is not considered a vowel.

// take str and toLowerCase 
// group vowels together / separate charaters? with . split
// use.filter to filter out vowel
// .join?
// 	return


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true

// console.log(pets.includes('at'));
// // expected output: false

// first answer
function removeVowels(str) {
	let vowels = ['a','e','i','o','u','A','E','I','O','U',];
	let char = str.split('');
	
	return char.filter(letter => !vowels.includes(letter)).join('');
}
