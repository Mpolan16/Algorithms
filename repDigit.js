// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

// Examples

// isRepdigit(66) ➞ true

// isRepdigit(0) ➞ true

// isRepdigit(-11) ➞ false
// Notes

// The number 0 should return true (even though it's not a positive number).
// Check the Resources tab for more info on repdigits.


//approach: I'm thinking separate the charaters first with.split('') and then if else statmenet of if the split === || === 0 return true 


//MORE INFO on repdigits

// In recreational mathematics, a repdigit or sometimes monodigit[1] is a natural number composed of repeated instances of the same digit in a positional number system (often implicitly decimal). The word is a portmanteau of repeated and digit. Examples are 11, 666, 4444, and 999999. All repdigits are palindromic numbers and are multiples of repunits. Other well-known repdigits include the repunit primes and in particular the Mersenne primes (which are repdigits when represented in binary).

// Repdigits are the representation in base 
// B
// B of the number 
// x
// B
// y
// −
// 1
// B
// −
// 1
// x\frac{B^y -1}{B-1} where 
// 0
// <
// x
// <
// B
// 0<x<B is the repeated digit and 
// 1
// <
// y
// {\displaystyle 1<y} is the number of repetitions. For example, the repdigit 77777 in base 10 is 
// 7
// ×
// 10
// 5
// −
// 1
// 10
// −
// 1
// {\displaystyle 7\times {\frac {10^{5}-1}{10-1}}}.

// A variation of repdigits called Brazilian numbers are numbers that can be written as a repdigit in some base, not allowing the repdigit 11. For example, 27 is a Brazilian number because 27 is the repdigit 33 in base 8, while 9 is not a Brazilian number because its only repdigit representation is 118, not allowed in the definition of Brazilian numbers. The representations of the form 11 are considered trivial and are disallowed in the definition of Brazilian numbers, because all natural numbers n greater than two have the representation 11n − 1.[2] The first twenty Brazilian numbers are