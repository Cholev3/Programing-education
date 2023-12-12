function cleverLily(input) {
    let age = Number(input[0]);
    let washinMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let moneySaved = 0;
    let numberOfToys = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= age; currentAge++) {

        if (currentAge % 2 === 0) {
            moneySaved += addMoney;
            stolenMoney++
            addMoney += 10

        } else {
            numberOfToys++;
        }

    }
    let toysSold = numberOfToys * singleToyPrice;
    let totalSavedMoney = moneySaved + toysSold - stolenMoney;

    if (totalSavedMoney >= washinMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washinMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washinMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);