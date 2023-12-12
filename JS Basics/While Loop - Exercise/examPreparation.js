function examPreparation(input) {
    let index = 0;
    let allowedBadGrades = Number(input[index]);
    index++
    let excerciseName = input[index];
    index++
    let grades = Number(input[index]);
    index++
    let gradesCount = 0;
    let badGradesCount = 0;
    let goodGrades = 0;
    let exerciseCount = 0;
    let allGradesCombined = 0;
    let lastExercise = "";

    while (excerciseName !== "Enough") {
        if (grades > 4) {
            goodGrades += grades;
        } else if (grades <= 4) {
            badGradesCount++
        }



        lastExercise = excerciseName
        allGradesCombined += Number(grades);
        excerciseName = input[index];

        exerciseCount++;
        index++;
        grades = input[index];
        gradesCount++;

        index++;
        if (badGradesCount === allowedBadGrades) {
            console.log(`You need a break, ${badGradesCount} poor grades.`);
            break;
        }


    }
    if (excerciseName === "Enough") {
        console.log(`Average score: ${(allGradesCombined / gradesCount).toFixed(2)}`);
        console.log(`Number of problems: ${exerciseCount}`);
        console.log(`Last problem: ${lastExercise}`);

    }


}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);