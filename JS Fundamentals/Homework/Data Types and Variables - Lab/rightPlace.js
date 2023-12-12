function rightPlace(first, char, last) {
    let word = '';
    for (let i = 0; i < first.length; i++) {
        let currentLetter = first[i];
        if (currentLetter == '_') {
            currentLetter = char;
        }
        word += currentLetter


    }

    if (word == last) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}
rightPlace('Str_ng', 'i', 'String');