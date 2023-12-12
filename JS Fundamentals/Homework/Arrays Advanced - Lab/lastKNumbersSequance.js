function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current;
        let sum = seq.slice(start, end).reduce((acc, val) => acc + val);
        seq[current] = sum;
    }
    console.log(seq.join(' '));
}
sumLastKNumbersSequence(6, 3);