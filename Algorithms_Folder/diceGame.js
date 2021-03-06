// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.

// Examples
// diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

// diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

// diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27
// Notes
// Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
// John only has two dice and will always give you outcomes for three rounds.

function add(a,b) {
      return a + b;
    }
    
    function diceGame(arr) {
    const results = [];
    const scoresPerRound = arr.map(round => {
    round.reduce((a,b) => { 
    if ( a === b ) { 
    results.push(0);
    } else { 
    results.push(round.reduce(add));
    };
    });
    });
      return results.includes(0) ? 0 : results.reduce(add);
    }

    //another possible solution

    function diceGame(arr) {
		for(let i of arr){
		if(i[0] == i[1]) return 0;
	}
		 return arr.flat().reduce((c,i) => c + i, 0);
}
//another possibnle solution
const diceGame = arr => arr.some(v => v[0]===v[1]) ? 0 :
	arr.flat().reduce((a,v) => a + v, 0);