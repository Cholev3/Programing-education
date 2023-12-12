function partyTime(arr) {
    let guestTypes = { 'VIP': [], 'regular': [] }
    let partyList = [];
    let command = arr[0]

    while (command != 'PARTY') {
        let currentNumber = arr.shift();
        partyList.push(currentNumber);
        command = arr[0];
    }
    arr.shift();

    for (let number of partyList) {
        if (number[0] % 1 == 0) {
            guestTypes['VIP'].push(number);
        } else {
            guestTypes['regular'].push(number);
        }
    }

    let values = Object.values(guestTypes);
    let vipGuests = values[0];
    let regularGuests = values[1];

    for (let number of arr) {
        if (vipGuests.includes(number)) {
            let index = vipGuests.indexOf(number);
            vipGuests.splice(index, 1);
        } else if (regularGuests.includes(number)) {
            let index = regularGuests.indexOf(number);
            regularGuests.splice(index, 1);
        }
    }

    let missingGuests = Number(values[0].length) + Number(values[1].length);


    console.log(missingGuests);
    if (vipGuests.length > 0) {
        console.log(values[0].join('\n'));
    }
    if (regularGuests.length > 0) {
        console.log(values[1].join('\n'));
    }

}
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);