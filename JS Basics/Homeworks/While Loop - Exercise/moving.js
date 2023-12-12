function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let index = 3;
    let command = input[index];
    let roomVolume = width * length * height;
    let boxes = 0;
    while (command !== "Done") {
        let currentBox = Number(command);
        boxes += currentBox;
        roomVolume -= currentBox;
        if (roomVolume < 0) {
            console.log(`No more free space! You need ${Math.abs(roomVolume)} Cubic meters more.`);
            break;
        }
        index++
        command = input[index]
    }
    if (roomVolume >= 0) {
        console.log(`${(roomVolume)} Cubic meters left.`);
    }


}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);