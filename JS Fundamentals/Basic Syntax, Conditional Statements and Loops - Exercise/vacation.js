function vacation(people, type, day) {
    let price = 0;

    switch (type) {
        case 'Students':
            if (day == 'Friday') {
                price = 8.45;
            } else if (day == 'Saturday') {
                price = 9.80;
            } else if (day == 'Sunday') {
                price = 10.46;
            } break;
        case 'Business':
            if (day == 'Friday') {
                price = 10.90;
            } else if (day == 'Saturday') {
                price = 15.60;
            } else if (day == 'Sunday') {
                price = 16;
            } break;
        case 'Regular':
            if (day == 'Friday') {
                price = 15;
            } else if (day == 'Saturday') {
                price = 20;
            } else if (day == 'Sunday') {
                price = 22.50;
            } break;
    }
    let totalPrice = price * people

    if (type == 'Students' && people >= 30) {
        totalPrice *= 0.85;
    }
    if (type == 'Business' && people >= 100) {
        totalPrice -= 10 * price;

    }
    if (type == 'Regular' && (people >= 10 && people <= 20)) {
        totalPrice *= 0.95;

    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday")