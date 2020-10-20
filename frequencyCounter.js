//Given two strings, write a function to detemine if the second string is an anagram of the first. Assume all are lowercase.

//examples validAnagram(",") true
//("rat", "car") false


function validAnagram(a, b) {
    if (a.length !== b.length) {
        return false;
        //in order for them to be the same they must be the same length
    }
    const lookup = {};
//object called look up to creat and object of 1st string
    for (let i = 0; i < a.length; i++) {
        let letter = a[i];
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] =1;
    }
//then use the same obj and do another for loop ** not nested** and sub 1 from the specific key letter
    for (let i = 0; i < b.length; i++) {
        let letter = b[i];
        //if there is not a letter to subtract from it knows it doesnt match so return false
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
//return true is it passes all tests
    return true;
  }