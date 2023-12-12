function furniture(input) {
    let furnitureName = [];
    let totalPrice = 0;

    let command = input.shift();
    let pattern = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>\d+.?\d*)!(?<qty>\d*)/;

    while (command != 'Purchase') {
        let match = command.match(pattern);

        if (match) {
            let { furniture, price, qty } = match.groups;
            furnitureName.push(furniture)

            let itemPrice = Number(price) * Number(qty);
            totalPrice += itemPrice;
        }
        command = input.shift();
    }
    console.log('Bought furniture:');
    if (furnitureName.length > 0) {
        console.log(furnitureName.join('\n'));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);