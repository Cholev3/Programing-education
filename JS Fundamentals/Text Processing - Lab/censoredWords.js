function censoredWords(str, word) {
    let replacement = '*'
    console.log(str.split(word).join(replacement.repeat(word.length)));
}
censoredWords('A small sentence with some words', 'small');