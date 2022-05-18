let chunked = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 5555555];

for (let i = 0; i < chunked.length; i++) {

    for (let j = 0; j < chunked[i].length; j++) {

        let test = chunked[i][j];
        if (Array.isArray(test)) {
            const maximumJaggedNumber = Math.max(...test);
            console.log(maximumJaggedNumber)
        }
    }
}