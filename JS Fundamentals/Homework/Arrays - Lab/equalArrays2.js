function equalArrays  (arr1, arr2){
    let sum = 0;
    let currentNumber1 = 0;
    let currentNumber2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        currentNumber1 = Number(arr1[i]);
        sum += currentNumber1;
        currentNumber2 = Number(arr2[i]);
        if (currentNumber1 !== currentNumber2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if (currentNumber1 === currentNumber2) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);