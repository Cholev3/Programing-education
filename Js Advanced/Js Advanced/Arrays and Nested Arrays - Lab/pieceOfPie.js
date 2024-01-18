function pieceOfPie(arr, first, second) {
    let start = arr.indexOf(first);
    let end = arr.indexOf(second);
    return arr.slice(start, end + 1);
}
console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));