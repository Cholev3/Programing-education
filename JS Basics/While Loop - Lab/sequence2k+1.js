function sequence2kplus1(input) {
    let num = 0;
    let end = Number(input[0]);

    while (num < end) {
        num = num * 2 + 1

        if (num > end) {
            break;
        }
        console.log(num);

    }


}
sequence2kplus1(["17"]);