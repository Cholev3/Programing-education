function thePyramidOfKingDjoser(base, increment) {
    let singleBlock = 1 * 1 * increment;
    let stoneCount = 0;
    let marbleCount = 0;
    let lapisLazuliCount = 0;
    let goldCount = 0;
    let height = 0;

    for (let i = base; i >= 1; i -= 2) {
        height++;
        let gold = i;
        if (i == 1 || i == 2) {
            gold = i * singleBlock;
            goldCount = gold * gold;
            break;
        }
        let area = base * base;
        let stones = base - 2;
        if (stones <= 0) {
            stones = 1;
        }
        let stoneSquare = stones * stones;

        stoneCount += stoneSquare * singleBlock;

        let marbles = area - stoneSquare;
        

        if (height % 5 === 0) {
            lapisLazuliCount += marbles * singleBlock;
        } else {
            marbleCount += marbles * singleBlock;
        }

        base -= 2;
    }
    let totalHeight = height * increment;
    console.log(`Stone required: ${Math.ceil(stoneCount)}`);
    console.log(`Marble required: ${Math.ceil(marbleCount)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliCount)}`);
    console.log(`Gold required: ${Math.ceil(goldCount)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
}
thePyramidOfKingDjoser(12, 1)