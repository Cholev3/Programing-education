function rotateArray(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let lastNum = arr.pop();
        arr.unshift(lastNum);
    }

    console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4'], 2);