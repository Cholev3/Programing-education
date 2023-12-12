function searchForANumber(colection, nums) {
    let toTake = nums[0];
    let toDelete = nums[1];
    let searchedNum = nums[2];

    let slicedArr = colection.slice(0, toTake);
    slicedArr.splice(0, toDelete);

    let counter = 0;

    for (let num of slicedArr) {
        if (num == searchedNum) {
            counter++
        }
    }

    console.log(`Number ${searchedNum} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
