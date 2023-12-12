function replaceRepeatingChars(str) {
    let modifiedStr = [];
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        let nextLetter = str[i + 1];
        if (currentLetter != nextLetter) {
            modifiedStr.push(currentLetter);
        }
    }
    console.log(modifiedStr.join(''));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');