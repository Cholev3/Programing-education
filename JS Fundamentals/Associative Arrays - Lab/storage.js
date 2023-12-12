function storage(arr) {
    let fullStorage = {};

    for (let products of arr) {
        let [product, qty] = products.split(' ');
        if (product in fullStorage) {
            fullStorage[product] += Number(qty);

        } else {
            fullStorage[product] = Number(qty);
        }
    }

    let entries = Object.entries(fullStorage);
    for (let entry of entries) {
        let [product, qty] = entry;
        console.log(`${product} -> ${qty}`);
    }

}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);