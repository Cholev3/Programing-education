function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;
    let entireCake = length * width;
    let pieces = 0;

    while (command !== "STOP") {
        let currentPieces = Number(command);
        pieces += currentPieces;
        if (pieces > entireCake) {
            console.log(`No more cake left! You need ${pieces - entireCake} pieces more.`);
            break;
        }
        command = input[index];
        index++

    }

    if (command === "STOP" && pieces <= entireCake) {
        console.log(`${entireCake - pieces} pieces are left.`);
    }

}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);