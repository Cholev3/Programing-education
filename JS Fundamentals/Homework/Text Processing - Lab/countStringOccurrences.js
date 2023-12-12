function countStringOccurrences(text, word) {
    let repeat = 0;
    let splitText = text.split(' ');

    for (let currentWord of splitText) {

        if (currentWord == word) {
            repeat++
        }
    }

    console.log(repeat);

}
countStringOccurrences('This is a word and it also is a sentence', 'is');