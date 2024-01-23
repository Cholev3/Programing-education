function colorize() {
    const table = document.getElementsByTagName('tr');
    for (let i = 1; i < table.length; i += 2) {
        let item = table[i];
        item.style.backgroundColor = 'teal';
    }
}