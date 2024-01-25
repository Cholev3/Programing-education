function subtract() {
    let firstNumRef = document.getElementById("firstNumber");
    let secondNumRef = document.getElementById("secondNumber");
    let resultRef = document.getElementById("result");

    resultRef.textContent = Number(firstNumRef.value) - Number(secondNumRef.value);
}