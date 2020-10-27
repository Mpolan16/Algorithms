function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

//recursive function;
//1. base case- when recusrion stops
//2. Different peice of data

