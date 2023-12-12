function numbers(arr) {
    let nums = arr.shift(0);
    let separetedNums = nums.split(' ');
    let index = 0;
    let input = arr[index];



    while (input != 'Finish') {
        let command = input.split(' ');
        if (command[0] == 'Add') {
            separetedNums.push(command[1]);

        } else if (command[0] == 'Remove') {
            for (let i = 0; i < separetedNums.length; i++) {
                let currentNum = separetedNums[i];
                if (currentNum == command[1]) {
                    separetedNums.splice(i, 1);
                    break;
                }
            }

        } else if (command[0] == 'Replace') {
            for (let i = 0; i < separetedNums.length; i++) {
                let currentNum = separetedNums[i];
                if (currentNum == command[1]) {
                    separetedNums.splice(i, 1, command[2]);
                    break;
                }
            }

        } else if (command[0] == 'Collapse') {
            for (let i = 0; i < separetedNums.length; i++) {
                let currentNum = Number(separetedNums[i]);
                if (currentNum < command[1]) {
                    separetedNums.splice(i, 1);
                    i = -1;
                }
            }

        }
        index++
        input = arr[index];
    }
    console.log(separetedNums.join(' '));

}
numbers(["1 4 5 19", "Add 1", "Remove 4", "Replace 5 6", "Finish"]);