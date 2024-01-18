function EvenPositionElement(arr) {
    let evenIndexes = [];
    for (let i = 0; i < arr.length; i += 2) {
        evenIndexes.push(arr[i]);
    }

    console.log(evenIndexes.join(' '));
}
EvenPositionElement(['20', '30', '40', '50', '60']);