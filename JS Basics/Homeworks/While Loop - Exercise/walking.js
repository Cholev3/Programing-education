function walking(input) {
    let goalPerDay = 10000;
    let index = 0;
    let command = input[index];
    let totalSteps = 0;

    while (command !== "Going home") {
        let currentSteps = Number(command);
        totalSteps += currentSteps

        if (totalSteps >= goalPerDay) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goalPerDay} steps over the goal!`);
            break;
        }
        index++
        command = input[index];
    }


    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1])
        totalSteps += stepsToHome;

        if (totalSteps >= goalPerDay) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goalPerDay} steps over the goal!`);
        } else {
            console.log(`${goalPerDay - totalSteps} more steps to reach goal.`);
        }
    }


}
walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])
