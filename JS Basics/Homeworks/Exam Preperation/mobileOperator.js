function mobileOperator(input) {
    let duration = input[0];
    let type = input[1];
    let internetIncluded = input[2];
    let monthsForPay = input[3];
    let pricePerMonth = 0;


    switch (type) {
        case "Small":
            if (duration === "one") {
                pricePerMonth = 9.98;
            } else {
                pricePerMonth = 8.58;
            }
            break;
        case "Middle":
            if (duration === "one") {
                pricePerMonth = 18.99;
            } else {
                pricePerMonth = 17.09;
            }
            break;
        case "Large":
            if (duration === "one") {
                pricePerMonth = 25.98;
            } else {
                pricePerMonth = 23.59;
            }
            break;
        case "ExtraLarge":
            if (duration === "one") {
                pricePerMonth = 35.99;
            } else {
                pricePerMonth = 31.79;
            }
            break;
    }

    if (internetIncluded === "yes") {
        if (pricePerMonth <= 10) {
            pricePerMonth += 5.50;
        } else if (pricePerMonth <= 30) {
            pricePerMonth += 4.35;
        } else {
            pricePerMonth += 3.85;
        }

    }
    let totalSum = pricePerMonth * monthsForPay;

    if (duration === "two") {
        totalSum *= 0.9625;
    }
    console.log(`${totalSum.toFixed(2)} lv.`);

}
mobileOperator(["one", "Small", "yes", "10"]);