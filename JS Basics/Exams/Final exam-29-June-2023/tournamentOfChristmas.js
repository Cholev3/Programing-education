function tournamentOfChristmas(input) {
    let tournamentDays = Number(input[0]);
    let index = 1;
    let command = input[index];
    let dailyWins = 0;
    let winsPerDay = 0;
    let lossesPerDay = 0;
    let winDays = 0;
    let loseDays = 0;
    let totalEarnings = 0;

    for (let days = 1; days <= tournamentDays; days++) {

        while (command !== "Finish") {
            let currentGame = command;
            index++
            let currentResult = input[index];
            if (currentResult === "win") {
                winsPerDay++;
                dailyWins += 20;
            } else {
                lossesPerDay++
            }
            index++;
            command = input[index];
        }
        if (winsPerDay > lossesPerDay) {
            winDays++
            dailyWins *= 1.10;
        } else {
            loseDays++
        }
        totalEarnings += dailyWins
        dailyWins = 0;
        winsPerDay = 0;
        lossesPerDay = 0;
        index++
        command = input[index];
    }

    if (winDays > loseDays) {
        totalEarnings *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalEarnings.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalEarnings.toFixed(2)}`);
    }

}
tournamentOfChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);