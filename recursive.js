// function countDown(num){
//     if(num <= 0) {
//         console.log("All done!");
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }

//recursive function;
//1. base case- when recusrion stops
//2. Different peice of data

function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!");
}
countDown(5);