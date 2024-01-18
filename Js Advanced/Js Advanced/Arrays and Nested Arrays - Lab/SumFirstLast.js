function SumFirstLast(arr) {
    return Number(arr.shift()) + Number(arr.pop());
}
console.log(SumFirstLast(['20', '30', '40']));