function sumTable() {
    const rows = Array.from(document.querySelectorAll("table tr td"));
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i += 2) {
        let price = Number(rows[i].textContent)
        sum += price
    }

    document.getElementById("sum").textContent = sum;
}