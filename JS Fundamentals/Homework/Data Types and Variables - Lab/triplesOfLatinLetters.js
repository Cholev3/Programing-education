function triplesOfLatinLetters(n) {
    for (let a = 0; a < n; a++) {
        let letter = String.fromCharCode(97 + a);
        for (let b = 0; b < n; b++) {
            let secondLetter = String.fromCharCode(97 + b);
            for (let c = 0; c < n; c++) {
                let thirdLetter = String.fromCharCode(97 + c);
                let combination = letter + secondLetter + thirdLetter;
                console.log(combination);
            }
        }

    }


}
triplesOfLatinLetters(2);