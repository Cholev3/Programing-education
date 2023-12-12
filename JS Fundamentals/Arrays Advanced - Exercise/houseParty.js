function houseParty(arr) {
    let guestList = [];

    for (let action of arr) {
        action = action.split(' ');
        if (action.length > 3) {
            let notGoing = action[0];
            if (!guestList.includes(notGoing)) {
                console.log(`${notGoing} is not in the list!`);
            } else {
                let indexOf = guestList.indexOf(notGoing);
                guestList.splice(indexOf, 1);
            }

        } else {
            let name = action[0];
            if (!guestList.includes(name)) {

                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);