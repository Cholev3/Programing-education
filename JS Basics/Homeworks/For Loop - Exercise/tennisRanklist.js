function tennisRanklist(input) {

    let numberOfTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let prizePoints = 0;
    let wonTournaments = 0;


    for (let index = 2; index < input.length; index++) {
        let points = input[index];

        switch (points) {
            case "W":
                prizePoints += 2000;
                wonTournaments++;
                break;
            case "F":
                prizePoints += 1200; break;
            case "SF":
                prizePoints += 720; break;
        }
    }
    let totalPoints = startingPoints + prizePoints;
    let averagePoints = prizePoints / numberOfTournaments;
    let percentageWon = wonTournaments / numberOfTournaments * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentageWon.toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);