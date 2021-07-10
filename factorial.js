let n = 4
function factorial(n){
    if(n === 0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}     
console.log(factorial(n))


function factorialFor(n) {
    let result = 1
    for (let i = 1; i <= n; i++) { 
        result = result * i 
    }
    return result
}