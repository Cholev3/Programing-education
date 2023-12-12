function train(arr) {
    let wagons = arr.shift().split(' ');
    let wagonCapacity = arr.shift();

    for (let command of arr) {
        command = command.split(' ')
        if (command.length > 1) {
            let wagon = command[1]
            wagons.push(wagon)
        } else {
            command = Number(command.join(''));
            for (let i = 0; i < wagons.length; i++) {
                let currentWagon = Number(wagons[i]);
                if (currentWagon + command <= wagonCapacity) {
                    currentWagon += command;
                    wagons.splice(i, 1, currentWagon);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);