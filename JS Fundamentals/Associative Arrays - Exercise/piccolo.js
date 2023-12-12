function piccolo(arr) {
    let garage = {};


    for (let i = 0; i < arr.length; i++) {
        let splitArr = arr[i].split(', ');
        let direction = splitArr[0];
        let carNumber = splitArr[1];

        if (direction == 'IN') {
            garage[carNumber] = undefined;
        } else if (direction == 'OUT') {
            delete garage[carNumber];
        }
    }
    let length = Object.keys(garage).length;

    if (length == 0) {
        console.log("Parking Lot is Empty");
    }

    let keys = Object.keys(garage).sort()
    console.log(keys.join('\n'));

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);