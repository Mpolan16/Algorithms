// Write a regular expression that matches a string if it contains at least one digit.

// Examples

// "c8" ➞ true

// "23cc4" ➞ true

// "abwekz" ➞ false

// "sdfkxi" ➞ false
// Notes

// This challenge is designed to use RegEx only.

let x = /\d/;

// What Is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.

// When you search for data in a text, you can use this search pattern to describe what you are searching for.

// A regular expression can be a single character, or a more complicated pattern.

// Regular expressions can be used to perform all types of text search and text replace operations.

// --> Regular Expression Modifiers
// Modifiers can be used to perform case-insensitive more global searches:

// Modifier	Description	

// i	        Perform case-insensitive matching	
// g	        Perform a global match (find all matches rather than stopping after the first match)	
// m	        Perform multiline matching

// --> Regular Expression Patterns
// Brackets are used to find a range of characters:

// Expression	Description	Try it
// [abc]	Find any of the characters between the brackets	
// [0-9]	Find any of the digits between the brackets	
// (x|y)	Find any of the alternatives separated with |	

// --> Metacharacters are characters with a special meaning:

// Metacharacter	Description	

// \d	            Find a digit	
// \s	            Find a whitespace character	
// \b	            Find a match at the beginning of a word like this: \bWORD, or at the                    end of a word like this: WORD\b	
// \uxxxx	        Find the Unicode character specified by the hexadecimal number xxxx	

// --> Quantifiers define quantities:

// Quantifier	Description	Try it
// n+	        Matches any string that contains at least one n
// n*	        Matches any string that contains zero or more occurrences of nTry 
// n?	        Matches any string that contains zero or one occurrences of n