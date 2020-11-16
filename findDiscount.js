// Create a function that takes two arguments: the final price and the discount percentage as integers and returns the final price after the discount.

// Alternative Text

// Examples

// dis(1500, 50) ➞ 750

// dis(89, 20) ➞ 71.2

// dis(100, 75) ➞ 25
// Notes

// Your answer should be rounded to two decimal places.

//APPROACH

//Looks like a simple math problem
//im planning to take the first arg "price" and then multiply it by "discount"/100 and return price - discount

//first solution

function dis(price, discount) {
	var totalDis = price - (price*(discount/100));
	return +totalDis.toFixed(2);
}