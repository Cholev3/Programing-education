function triangleOfNumbers(num) {
    let str = ''
    for (let i = 1; i <= num; i++) {
        str = (i + ' ').repeat(i)
        console.log(str);

    }

}
triangleOfNumbers(5)