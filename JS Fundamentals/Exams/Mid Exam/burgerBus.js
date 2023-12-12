function burgerBus(input) {
    let cities = Number(input[0]);
    let index = 1;
    let currentCity = input[index];
    index++
    let income = 0
    let expenses = 0;
    let profit = 0;
    let cityCount = 0;
    let totalProfit = 0;

    while (index < input.length) {
        cityCount++

        income = Number(input[index]);
        index++
        expenses = Number(input[index]);
        index++
        if (cityCount % 3 == 0 && cityCount % 5 == 0) {

        } else if (cityCount % 3 == 0) {
            expenses *= 1.5;
        }

        if (cityCount % 5 == 0) {
            income *= 0.9;
        }

        profit = income - expenses;
        totalProfit += profit;

        console.log(`In ${currentCity} Burger Bus earned ${profit.toFixed(2)} leva.`);

        currentCity = input[index];
        index++

    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);



}
burgerBus(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"]);