//this pattern involves dividing a data set into smaller chuncks and then repeating a process with a subset of data.

//this paterncan tremendously ecrease time complexity;

//quick sort and merge sort are examplets of Divide and Conquer algorithms

//Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the vlaue is not found, return -1.

function search(array, val) {
    let min = 0;
    let max = array.length -1;

    while (min <= max){
        let middle = Math.floor((min +max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        }
        else if( array[middle] > val){
            max = middle -1;
        }  
        else {
            return middle;
        }
      }
      return -1;
}

//time complexity - Log(N) - Binary Search