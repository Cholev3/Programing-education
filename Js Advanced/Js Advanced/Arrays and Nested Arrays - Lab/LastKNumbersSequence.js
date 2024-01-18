function LastKNumbers(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current;
        let sum = seq.slice(start, end).reduce((acc, val) => acc + val);
        seq.push(sum);
    }

    return seq;
}
console.log(LastKNumbers(8, 2));