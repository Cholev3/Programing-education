function solve(str) {
    let words = [];
    let currentWord = [str[0]];

    for (let i = 1; i < str.length; i++) {
        let currentLetter = str[i];
        if (currentLetter.charCodeAt(0) >= 65 && currentLetter.charCodeAt(0) <= 90) {
            let word = currentWord.join('');
            words.push(word);
            currentWord = [];
            currentWord.push(currentLetter);

        } else {
            currentWord.push(currentLetter);

        }
    }
    let word = currentWord.join('');
    words.push(word);
    console.log(words.join(', '));

}