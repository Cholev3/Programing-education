function trainTheTrainers(input) {
    let judges = Number(input[0]);
    let index = 1;
    let command = input[index];
    let combinedSum = 0;
    let excerciseCount = 0;
    let avgGrade = 0;
    let avgGradeCount = 0;

    while (command !== "Finish") {
        let currentExcercise = command;
        excerciseCount++;
        index++;
        for (let j = 1; j <= judges; j++) {
            let currentGrade = Number(input[index]);
            combinedSum += currentGrade;
            index++
            command = input[index];

        }
        avgGrade = combinedSum / judges
        avgGradeCount += avgGrade;
        console.log(`${currentExcercise} - ${(avgGrade).toFixed(2)}.`);
        combinedSum = 0;
        avgGrade = 0;
    }
    let totalAvgGrade = avgGradeCount / excerciseCount;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);

}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);