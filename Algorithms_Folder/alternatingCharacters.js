// Function Description
// Complete the alternatingCharacters function in the editor below. It must return an integer representing the minimum number of deletions to make the alternating string.
// alternatingCharacters has the following parameter(s):
// s: a string

//you have a string that only contains characters A and B. They reapeat and my job is to make A and B alternate by deleting the consecutive ones. The objective though is to achieve the alternation with deleting the smallest amount of charaters possible.

// q represetns the about of queries = how many strings they are giving me to fix

//s represents the string and ONLY has A and B charaters

//Output Format
//for each query, prin the minumum nuber of seletions required on a new line

//sample input

// 5 --->q = query
// AAAA ---> 1 string from the query etc...
// BBBBB
// ABABABAB
// BABABA
// AAABBB

//Sample Output


// 3 -- minimum i can delete here is 3 etc...
// 4
// 0
// 0
// 4

// Explanation
// The characters marked red are the ones that can be deleted so that the string doesn't have matching consecutive characters.


function alternatingCharacters(q,s) {

    for (var i =0; i < q+1; i++){
        for (var j = 0; j < s.length; j++){
            for (var k = 1; k < s.length; k++){
                var repeat = 0;
                if (s.charAt(j) === s.charAt(k)){
                    repeat++;
                }
                else if (s.char(0) === s.charAt(-1)){
                    repeat++;
                 return repeat;
                } else if (s.charAt(j) !== s.char(k)){
                    s.charAt(j+2);
                    s.charAt(k+2);
            }
        }
    }
}
