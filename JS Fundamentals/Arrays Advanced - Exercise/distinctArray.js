function distinctArray(arr) {
    let outputArray = Array.from(new Set(arr))
    console.log(outputArray.join(' '));
}
// distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])