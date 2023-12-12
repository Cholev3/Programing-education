function wordOccurrences(arr) {
    let wordCounter = {};

    for (let word of arr) {
        if (word in wordCounter) {
            wordCounter[word]++;
        } else {
            wordCounter[word] = 1;
        }
    }

    let entries = Object.entries(wordCounter).sort((a, b) => b[1] - a[1]);
    for (let [word, num] of entries) {

        console.log(`${word} -> ${num} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);