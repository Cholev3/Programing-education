function condenseArrayToNumber(nums) {
    let condensed = [];
    let sum = 0;
    let index = 0;
    
    while (nums.length > 1) {
        while (index < nums.length - 1) {
            condensed.push(Number(nums[index]) + Number(nums[index + 1]));
            index++;
        }
        nums = condensed;
        condensed = [];
        index = 0;
    }
    console.log(Number(nums));

}
condenseArrayToNumber([1]);