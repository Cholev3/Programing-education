function worldSwimmingRecord(input) {
    let worldSwimmingRecord = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsForOneMeter = Number(input[2]);

    let totalTime = distanceInMeters * secondsForOneMeter;
    let waterCurrentDellay = Math.floor(distanceInMeters / 15) * 12.5;
    let finalTime = totalTime + waterCurrentDellay;

    if (finalTime < worldSwimmingRecord) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    }
    else {
        let timeNeeded = finalTime - worldSwimmingRecord;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",
    "3017",
    "5.03"]);