function amazingNumbers(number) {
    let numAsString = String(number)
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    let sumAsString = String(sum);
    let isAmazing = 'False'

    for (let b = 0; b < sumAsString.length; b++) {

        if (sumAsString[b] == 9) {
            isAmazing = 'True'
        }
    }
    console.log(`${number} Amazing? ${isAmazing}`);


}
amazingNumbers(1233);
//amazingNumbers(999);