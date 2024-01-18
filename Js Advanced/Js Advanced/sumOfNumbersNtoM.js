function sumOfNumbersNtoM(n, m) {
    let result = 0;
    for (let i = Number(n); i <= Number(m); i++) {
        result += i;
    }
    return result;
}
console.log(sumOfNumbersNtoM('1', '5'));