function oscars(input) {
    let actor = input[0];
    let academyPoints = Number(input[1]);
    let judges = Number(input[2]);

    for (let index = 3; index < input.length; index++) {
        if (index % 2 !== 0) {
            let points = index + 1;
            let total = input[index].length * Number(input[points]) / 2;
            academyPoints += total;
        }
        if (academyPoints >= 1250.5) {
            break;
        }
    }
    if (academyPoints >= 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }


}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])



    switch (prizePoints) {
        case "W":
            
        case "F":
        case "SF":
    }


    let numberOfTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let prizePoints = 0;