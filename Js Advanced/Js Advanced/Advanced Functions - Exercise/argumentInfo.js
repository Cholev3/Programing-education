function argumentInfo(...inputs) {
    let inputsObj = {};

    for (let input of inputs) {
        let type = typeof (input);
        console.log(`${type}: ${input}`);

        if (type in inputsObj) {
            inputsObj[type]++
        } else {
            inputsObj[type] = 1;
        }
    }

    const sortedTypes = Object.entries(inputsObj).sort((a, b) => b[1] - a[1] || inputs.indexOf(a[0]) - inputs.indexOf(b[0]));

    for (let entry of sortedTypes) {
        let [type, count] = entry;
        console.log(`${type} = ${count}`);

    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })