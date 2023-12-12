function onTimeForTheExam(input) {

    let hourTest = Number(input[0]);
    let minutesTest = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    let testTime = hourTest * 60 + minutesTest;

    let arrivalTime = hourArrival * 60 + minArrival;

    let difference = testTime - arrivalTime;

    if (difference < 0) {
        console.log("Late");
        let absDiff = Math.abs(difference);

        if (absDiff === 60) {
            console.log("1:00 hours after the start");
        } else if (absDiff < 60) {
            console.log(`${absDiff} minutes after the start`);
        } else {
            let hour = Math.floor(absDiff / 60);
            let minutes = absDiff % 60;

            if (minutes < 10) {
                console.log(`${hour}:0${minutes} hours after the start`);
            } else {
                console.log(`${hour}:${minutes} hours after the start`);
            }
        }
    } else if (difference <= 30) {
        console.log("On time");
        console.log(`${difference} minutes before the start`);
    } else {
        console.log("Early");
        if (difference === 60) {
            console.log("1:00 hours before the start");
        } else if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            let hour = Math.floor(difference / 60);
            let minutes = difference % 60;
            if (minutes < 10) {
                console.log(`${hour}:0${minutes} hours before the start`);
            } else {
                console.log(`${hour}:${minutes} hours before the start`);
            }
        }
    }
}
onTimeForTheExam(["9", "30", "9", "50"]);