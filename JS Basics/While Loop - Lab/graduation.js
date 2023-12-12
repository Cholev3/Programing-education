function graduation(input) {
    let index = 0;
    let name = input[index];
    index++
    let fail = 0;
    let averageGrade = 0;
    let start = 1;
    let hasExcluded = false;



    while (start <= 12) {
        let currentGrade = Number(input[index])
        index++

        if (currentGrade < 4) {
            fail++
            if (fail === 2) {
                console.log(`${name} has been excluded at ${start} grade`);
                hasExcluded = true;
                break;
            }
            continue
        }
        start++
        averageGrade += currentGrade;
    }
    if (!hasExcluded) {
        averageGrade = (averageGrade / 12);
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);

    }


}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"]);