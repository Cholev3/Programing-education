function colorize() {
    const rows = document.getElementsByTagName('tr');
    for (let i = 1; i < rows.length; i += 2) {
        let item = rows[i];
        item.style.background = 'teal';
    }
}