// Create a function that returns the number of true values in an array.

//countTrue([true, false, false, true, false])    ➞    2
//countTrue([false, false, false, false])    ➞    0
//countTrue([])    ➞    0

let countTrue = [true, false, true, false]
let count = 0;
let valueCount = (change)=>{
    if(change){
        
        count ++
        console.log("true")
    } else{
        console.log("false")
    }
}

countTrue.forEach();