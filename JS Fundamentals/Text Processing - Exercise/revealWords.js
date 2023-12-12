function revealWords(words, text) {
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');
    let modifiedText = [];

    for (let textInput of textArr) {
        for (let word of wordsArr) {
            if (textInput[0] == '*' && textInput.length == word.length) {
                textInput = word;
            }

        }
        modifiedText.push(textInput);
    }
    console.log(modifiedText.join(' '));
}
revealWords('great, learning',
'softuni is ******** place for ***** new programming languages');