function pcGameShop(input) {
    let gamesSold = Number(input[0]);
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;
    let totalGameSum = 0;

    for (let index = 1; index <= gamesSold; index++) {
        let currentGame = input[index];
        totalGameSum++;
        if (currentGame === "Hearthstone") {
            hearthstone++;
        } else if (currentGame === "Fornite") {
            fornite++;
        } else if (currentGame === "Overwatch") {
            overwatch++;
        } else {
            others++
        }
    }
    console.log(`Hearthstone - ${(hearthstone / totalGameSum * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fornite / totalGameSum * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch / totalGameSum * 100).toFixed(2)}%`);
    console.log(`Others - ${(others / totalGameSum * 100).toFixed(2)}%`);

}
pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);