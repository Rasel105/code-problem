// 1. Create a function that will find the factorial number of [9] using recursion.
// ans code 
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(9));