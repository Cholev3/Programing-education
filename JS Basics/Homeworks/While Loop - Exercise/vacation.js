function vacation(input) {

    let vacationPrice = Number(input[0]);
    let index = 1;
    let money = Number(input[index]);
    index++
    let command = input[index];
    index++
    let sum = Number(input[index]);
    index++
    let daysCount = 0;
    let daysOfSpending = 0;
    while (money < vacationPrice) {
        daysCount++
        if (command === "spend") {
            money -= sum;
            if (money < 0) {
                money = 0;
            }
            daysOfSpending++
        } else if (command === "save") {
            daysOfSpending = 0;
            money += sum;
        }
        command = input[index];
        index++
        sum = Number(input[index]);
        index++
        if (daysOfSpending >= 5) {
            console.log("You can't save the money.");
            console.log(daysCount);
            break;
        }

        if (money >= vacationPrice) {
            console.log(`You saved the money for ${daysCount} days.`);
        }


    }



}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);