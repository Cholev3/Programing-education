function easterLunch(input) {
    let easterBreadCount = Number(input[0]);
    let eggShellCount = Number(input[1]);
    let cookiesKg = Number(input[2]);

    let easterBreadPrice = easterBreadCount * 3.20;
    let eggShellPrice = eggShellCount * 4.35;
    let cookiesPrice = cookiesKg * 5.40;
    let eggPaintPrice = eggShellCount * 12 * 0.15;

    let totalPrice = easterBreadPrice + eggShellPrice + cookiesPrice + eggPaintPrice;

    console.log(totalPrice.toFixed(2));

}
easterLunch(["3", "2", "3"]);