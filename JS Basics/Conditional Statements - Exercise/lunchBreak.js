function lunchBreak(input) {
    let name = input[0];
    let episodeLenght = Number(input[1]);
    let lunchBreak = Number(input[2]);

    let timeToEat = lunchBreak / 8;
    let timeToRest = lunchBreak / 4;
    let timeLeft = lunchBreak - timeToEat - timeToRest;

    if (timeLeft >= episodeLenght) {
        let timeToSpare = timeLeft - episodeLenght;
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeToSpare)} minutes free time.`);
    }
    else {
        let moreTime = episodeLenght - timeLeft;
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(moreTime)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",
    "48",
    "60"]);
