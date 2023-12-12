function suitcasesLoad(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let command = input[index];
    let suitcasesCount = 0;

    while (command !== "End") {
        let currentSuitcase = Number(command);
        suitcasesCount++;
        
        if (suitcasesCount % 3 === 0) {
            currentSuitcase *= 1.10;
        }
        if (capacity <= currentSuitcase) {
            console.log("No more space!");
            suitcasesCount--
            break;
        }
        
        capacity -= currentSuitcase;
        index++;
        command = input[index];
    }
    if (command === "End") {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${suitcasesCount} suitcases loaded.`);
}
suitcasesLoad(["700.5", "180", "340.6", "126", "220"])//700.5 180 340.6 126, 220