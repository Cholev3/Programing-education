function loadingBar(num) {
    let charNum = Number(num / 10);
    let remainingDots = Number(10 - charNum);
    let char = '%';
    let dots = '.';

    if (num < 100) {
        console.log(`${num}% [${char.repeat(charNum)}${dots.repeat(remainingDots)}]`);
        console.log('Still loading...');
    } else if (num = 100) {
        console.log('100% Complete!');
        console.log(`[${char.repeat(charNum)}${dots.repeat(remainingDots)}]`)
    }
}
loadingBar(100);

// 30% [%%%.......]
// Still loading...