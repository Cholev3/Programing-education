function calc() {
    let firstNum = document.getElementById("num1").value
    let secNum = document.getElementById("num2").value
    let sum = document.getElementById("sum").value
    sum = Number(firstNum) + Number(secNum);

    document.getElementById("sum").value = sum;
}
