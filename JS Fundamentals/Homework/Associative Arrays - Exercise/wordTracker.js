function wordTracker(arr) {
    let words = {};

    let searchedWords = arr.shift().split(' ');
    for (let word of searchedWords) {
        words[word] = 0;
    }

    for (let currentWord of arr) {
        if (currentWord in words) {
            words[currentWord]++;
        }
    }

    let entries = Object.entries(words).sort((a, b) => b[1] - a[1]);
    for (let [word, count] of entries) {
        console.log(word + ' - ' + count)
    }
}
wordTracker([
    'this sentence',
    'In',
    'this',
    'sentence',
    'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);