function bonusScore(input) {

    let numberOfPoints = Number(input[0]);
    let bonus = 0.0;

    if (numberOfPoints <= 100) {
        bonus = 5;
    }
    else if (numberOfPoints < 1000) {
        bonus = numberOfPoints * 0.20;
    }
    else {
        bonus = numberOfPoints * 0.10;
    }
    if (numberOfPoints % 2 == 0) {
        bonus += 1;
    }
    else if (numberOfPoints % 10 == 5) {
        bonus += 2
    }
    console.log(bonus);
    console.log(numberOfPoints + bonus);

}
bonusScore(["175"]);