function extract(content) {
    let result = [];
    let pattern = /\(([^)]+)\)/g;
    const text = document.getElementById(content).textContent;

    let match = text.match(pattern);

    for (let input of match) {
        input = input.split('');
        input.shift();
        input.pop();
        input = input.join('')
        result.push(input);
    }

    return result.join('; ');
}

// function extract(elementId) {
//     let para = document.getElementById(elementId).textContent;
//     let pattern = /\(([^)]+)\)/g;
//     let result = [];
//     let match = pattern.exec(para);
//     while (match) {
//         result.push(match[1]);
//         match = pattern.exec(para);
//     }
//     return result.join('; ');
// }


