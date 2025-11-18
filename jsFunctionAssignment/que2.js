function applyOperation(numbers , operation){
    let    result = [];
    for(let num of numbers){
        result.push(operation(num));
    }
    return result;
}

function double(n){
    return n*2;
}

function square(n){
    return n*n;
}

let nums =[1,2,3,4];


console.log("Doubled:", applyOperation(nums, double));
console.log("Squared:", applyOperation(nums, square));