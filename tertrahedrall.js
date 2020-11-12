// Create a function that takes an integer n and returns the nth tetrahedral number.

// Alternative Text

// Examples

// tetra(2) ➞ 4

// tetra(5) ➞ 35

// tetra(6) ➞ 56
// Notes

// There is a formula for the nth tetrahedral number.

function tetra(n) {
	let res = 0 
	for(let x=1;x<=n;x++){
		for(let y=1;y<=x;y++){
			res +=y
		}
	}
	return res
}