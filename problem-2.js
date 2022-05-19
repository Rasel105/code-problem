
// 2. Find the maximum number in a jagged array given below array of numbers?
// ans code 
let ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar[i].length; j++) {
        let jaggedArray = ar[i][j];
        if (Array.isArray(jaggedArray)) {
            const maximumJaggedNumber = Math.max(...jaggedArray);
            console.log(maximumJaggedNumber)
        }
    }
}