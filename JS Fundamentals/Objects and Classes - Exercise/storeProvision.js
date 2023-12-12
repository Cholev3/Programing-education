function storeProvision(stock, order) {
    let stockObj = {};

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let qty = Number(stock[i + 1]);
        stockObj[product] = qty;
    }

    for (let j = 0; j < order.length; j += 2) {
        let product = order[j];
        let qty = Number(order[j + 1]);

        if (product in stockObj) {
            stockObj[product] += qty;
        } else {
            stockObj[product] = qty;
        }
    }
    let entries = Object.entries(stockObj);

    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);