function mathOperations(a, b, action) {
    let actions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b
    }

    let result = actions[action](a, b);
    console.log(result);
}
mathOperations(5, 6, '+');