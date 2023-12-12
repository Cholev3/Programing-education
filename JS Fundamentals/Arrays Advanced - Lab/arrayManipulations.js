function arrayManipulations(arr) {
    let numbers = arr.shift().split(' ');

    for (let input of arr) {
        let [command, num] = input.split(' ');
        if (command == 'Add') {
            numbers.push(num);
        } else if (command == 'Remove') {
            if (numbers.includes(num)) {
                numbers = numbers.join(' ').split(`${num} `).join('').split(' ');
            }
        } else if (command == 'RemoveAt') {
            numbers.splice(num, 1);
        } else {
            let index = input.split(' ')[2];
            numbers.splice(index, 0, num)
        }
    }
    console.log(numbers.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);