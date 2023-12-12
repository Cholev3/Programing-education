function modernTimes(str) {
    let specialWords = [];
    let strArr = str.split(' ');

    for (let word of strArr) {
        if (word[0] == '#' && word.length > 1) {
            specialWords.push(word)
        }
    }

    for (let word of specialWords) {
        word = word.slice(1);
        let hasNumbers = false;
        for (let i = 0; i < word.length; i++) {
            let currentNum = word[i];

            if (currentNum % 1 == 0) {
                hasNumbers = true;
                break;
            }
        }
        
        if (hasNumbers == false) {

            console.log(word);
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');