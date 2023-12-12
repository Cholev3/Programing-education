function toyShop(input) {
    let puzzlePrice = 2.60;
    let talkingDollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let vacationPrice = Number(input[0]);

    let puzzleNum = Number(input[1]);
    let talkingDollNum = Number(input[2]);
    let teddyBearNum = Number(input[3]);
    let minionNum = Number(input[4]);
    let truckNum = Number(input[5]);

    let TotalNumberOfToys = puzzleNum + talkingDollNum + teddyBearNum + minionNum + truckNum;
    let totalPriceForToys = (puzzleNum * puzzlePrice) + (talkingDollNum * talkingDollPrice) + (teddyBearNum * teddyBearPrice) + (minionNum * minionPrice) + (truckNum * truckPrice);

    if (TotalNumberOfToys >= 50) {
        totalPriceForToys = totalPriceForToys * 0.75;
    }

    let rent = totalPriceForToys * 0.10;
    let totalProfit = totalPriceForToys - rent;

    if (totalProfit >= vacationPrice) {
        let moneyLeft = totalProfit - vacationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }
    else {
        let Insufficient = vacationPrice - totalProfit;
        console.log(`Not enough money! ${ Insufficient.toFixed(2) } lv needed.`);
    }
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"]);