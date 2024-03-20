function maxNumber(array) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        let curNum = array[i];
        let isMax = true;
        for (let j = i + 1; j < array.length; j++) {
            let nextNum = array[j];
            if (curNum <= nextNum) {
                isMax = false;
            } 
        }
            if (isMax === true) {
                newArray.push(curNum)
            }
        }
    
    console.log(newArray.join(` `));

}
maxNumber([1, 4, 3, 2]);
//maxNumber([14, 24, 3, 19, 15, 17]);
//maxNumber([41, 41, 34, 20]);
//maxNumber([27, 19, 42, 2, 13, 45, 48]);