function sortArray(arr, str) {

    if (str === 'asc') {
        arr = arr.sort((a, b) => a - b);
        return arr;
    } else if (str === 'desc') {
        arr = arr.sort((a, b) => b - a);
        return arr;
    }
}
sortArray([14, 7, 17, 6, 8], 'asc')