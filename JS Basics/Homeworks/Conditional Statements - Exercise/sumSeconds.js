function sumSeconds(input) {

    let firstAthleteTime = Number(input[0]);
    let secondAthleteTime = Number(input[1]);
    let thirdAthleteTime = Number(input[2]);

    let totalTimeInSeconds = firstAthleteTime + secondAthleteTime + thirdAthleteTime;

    let minutes = Math.floor(totalTimeInSeconds / 60);
    let remainingSeconds = totalTimeInSeconds % 60;

    if (remainingSeconds < 10) {

        console.log(`${minutes}:0${remainingSeconds}`);

    }

    else {
        console.log(`${minutes}:${remainingSeconds}`);

    }
}

sumSeconds(["22", "7", 
"34"])
;