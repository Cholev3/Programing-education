function multiplicationTable(num) {
    let sum = 0;
    for (let times = 1; times <= 10; times++) {
        sum = num * times;
        console.log(`${num} X ${times} = ${sum}`);
    }

}
multiplicationTable(5)