function aggregateElements(arr) {
    let sumA = arr.reduce((acc, val) => acc + val, 0);
    console.log(sumA);
    let sumB = arr.map(num => 1 / num).reduce((acc, val) => acc + val, 0);
    console.log(sumB);
    let sumC = arr.join('');
    console.log(sumC);
}
aggregateElements([1, 2, 3]);