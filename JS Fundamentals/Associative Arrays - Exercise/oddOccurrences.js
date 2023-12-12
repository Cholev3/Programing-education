function oddOccurrences(input) {
    let words = {};
    let lowCaseWords = input.toLowerCase().toString();
    let splitWords = lowCaseWords.split(" ");

    splitWords.forEach((x) => { words[x] = (words[x] || 0) + 1; });

    let wordsArr = [];

    let entries = Object.entries(words);
    for (let [key, value] of entries) {
        if (value % 2 != 0) {
            wordsArr.push(key);
        }
    }
    console.log(wordsArr.join(' '));

}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');