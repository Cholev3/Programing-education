function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);
    let videoCardPrice = 250;

    let totalVideoCardPrice = 250 * videoCards;
    let processorPrice = totalVideoCardPrice * 0.35;
    let ramPrice = totalVideoCardPrice * 0.10;

    let totalProcessorPrice = processors * processorPrice;
    let totalRamPrice = ram * ramPrice;
    let totalSum = totalProcessorPrice + totalRamPrice + totalVideoCardPrice;

    if (videoCards > processors) {
        totalSum *= 0.85;
    }
    if (totalSum <= budget) {
        let rest = budget - totalSum;
        console.log(`You have ${rest.toFixed(2)} leva left!`);
    }
    else {
        let more = totalSum - budget;
        console.log(`Not enough money! You need ${more.toFixed(2)} leva more!`);
    }
}
shopping(["900",
    "2",
    "1",
    "3"]);