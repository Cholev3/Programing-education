function reverseAnArrayOfNumbers(num, array) {
    let newArray = [];
    for (let i = 0; i < num; i++) {
        newArray.push(array[i]);
    }
    let reversed = [];

    for (let i = newArray.length - 1; i >= 0; i--) {
        reversed.push(newArray[i]);
    }
    console.log(reversed.join(' '));

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);