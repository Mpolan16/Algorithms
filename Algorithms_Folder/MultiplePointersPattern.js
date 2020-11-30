function sumZero(arr){
    let left =0;
    //this is the default number placement of all the way left of an array
    let right = arr.length - 1;
    //default for last number in array
    while(left < right){
        //while loop that checks is the array to left and right  === 0 
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
            //if it doesnt and the sum is greater than 0 the right pointer moves to the back one to check for sum 0
        }else if(sum > 0) {
            right--;
            //if no sum 0 just move the left pointer over one and this goes on until while loop is done.
        }else{
            left++;
        }
    }
}