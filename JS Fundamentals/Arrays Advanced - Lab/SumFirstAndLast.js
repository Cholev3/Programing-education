function SumFirstAndLast(arr) {
    let firstNum = Number(arr.shift());
    let secondNum = Number(arr.pop());
    console.log(firstNum + secondNum);
}
SumFirstAndLast(['20', '30', '40']);