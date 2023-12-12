function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let extrasClothing = Number(input[2]);

    let decor = budget * 0.10;
    let moneyForExtras = extras * extrasClothing;

    if (extras > 150) {
        moneyForExtras *= 0.90;
    }

    let totalMoney = decor + moneyForExtras;

    if (decor + moneyForExtras > budget) {
        let insufficient = totalMoney - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${insufficient.toFixed(2)} leva more.`);
    }

    else {
        moneyLeft = budget - totalMoney;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"]);
