function softUniBarIncome(input) {
    let totalIncome = 0;
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;

    let command = input.shift();

    while (command != 'end of shift') {
        let match = command.match(pattern);
        if (match) {

            let { name, product, count, price } = match.groups;
            let totalPrice = Number(count) * Number(price);
            totalIncome += totalPrice
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        command = input.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);