function charactersInRange(a, b) {
    let start = a.charCodeAt(0);
    let end = b.charCodeAt(0);
    let result = ''
    if (start < end) {
        for (let i = start + 1; i < end; i++) {
            let currentEl = i;
            result += String.fromCharCode(currentEl) + ' '

        }
    } else {
        for (let i = end + 1; i < start; i++) {
            let currentEl = i;
            result += String.fromCharCode(currentEl) + ' '

        }
    }
    console.log(result);

}
charactersInRange('d', 'a');