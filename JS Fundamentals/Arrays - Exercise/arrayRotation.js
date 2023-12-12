function arrayRotation(arr, rotationsCount) {
    for (let rotation = 1; rotation <= rotationsCount; rotation++) {
        let currentEl = arr.shift();
        arr.push(currentEl);

    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);