function simpleCalculator(a, b, operator) {
    let operations = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => a / b,
    ];

    let operationNames = [
        'add',
        'subtract',
        'multiply',
        'divide'
    ];

    let index;

    for (let i = 0; i < operationNames.length; i++) {
        if (operator == operationNames[i]){;
        index = i;
        }
    }

    let operation = operations[index];
    console.log(operation(a, b));
}
simpleCalculator(5, 5, 'multiply');