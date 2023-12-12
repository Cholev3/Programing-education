function bombNumbers(nums, bombNumbers) {
    let bombNum = bombNumbers[0];
    let bombRange = bombNumbers[1];

    for (let num of nums) {
        if (num == bombNum) {
            let index = nums.indexOf(num);
            nums.splice(Math.max(0, index - bombRange), 2 * bombRange + 1, 0)
        }
    }

    let sum = 0;

    for (let num of nums) {
        sum += num;
    }
    console.log(sum);
}
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
bombNumbers([1, 2, 1, 1, 1], [2, 3])