function footballResults(input) {
    let firstMatchResult = input[0];
    let secondMatchResult = input[1];
    let thirdMatchResult = input[2];

    let wins = 0;
    let losses = 0;
    let draws = 0

    if (Number(firstMatchResult[0]) > Number(firstMatchResult[2])) {
        wins++;
    } else if (Number(firstMatchResult[0]) < Number(firstMatchResult[2])) {
        losses++;
    } else {
        draws++;
    }

    if (Number(secondMatchResult[0]) > Number(secondMatchResult[2])) {
        wins++;
    } else if (Number(secondMatchResult[0]) < Number(secondMatchResult[2])) {
        losses++;
    } else {
        draws++;
    }

    if (Number(thirdMatchResult[0]) > Number(thirdMatchResult[2])) {
        wins++;
    } else if (Number(thirdMatchResult[0]) < Number(thirdMatchResult[2])) {
        losses++;
    } else {
        draws++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);



}
footballResults(["3:1", "0:2", "0:0"])