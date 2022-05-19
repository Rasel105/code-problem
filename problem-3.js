// 3. Find the counts of duplicates in an array?
// ans code 
let arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];
let sortedArr = [];
let count = 1;
sortedArr = arr.sort(function (a, b) {
    return a - b
});
for (let i = 0; i < sortedArr.length; i = i + count) {
    count = 1;
    for (let j = i + 1; j < sortedArr.length; j++) {
        if (sortedArr[i] == sortedArr[j])
            count++;
    }
    console.log(sortedArr[i] + " = " + count);
}