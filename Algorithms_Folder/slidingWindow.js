// this pattern involves creating a window which can either be an array or number from one position to another. Depending on a certian condition, the window either increases or closes (and a new window is created). Very useful for keeing track of subset of data in an array/string etc.

//not sorted elements

//Write a function called maxSubarraySum which accepts an array of integers and number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum +=arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// [1,2,3,4,4,4,4,4,4,4,5,6,7,7,7,7,8], 3)