function matchPhoneNumber(phonesArr) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let stringNums = phonesArr.join('');
    let validNumbers = stringNums.match(pattern);

    console.log(stringNums);
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])