// 4. How to find unique values from an array in sorted order?
// Unique number 

const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];
let uniqueNumber = [];
for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (uniqueNumber.indexOf(number) == -1) {
        uniqueNumber.push(number);
    }

}
console.log("The unique values are", uniqueNumber);