function schoolLibrary(arr) {
    let firstIndex = arr.shift(0);
    let shelf = firstIndex.split('&');
    let index = 0;
    let input = arr[index];

    while (input != 'Done') {
        let command = input.split(' | ');
        if (command[0] == 'Add Book') {
            if (!shelf.includes(command[1])) {
                shelf.unshift(command[1]);
            }
        } else if (command[0] == 'Take Book') {
            for (let i = 0; i < shelf.length; i++) {
                let currentBook = shelf[i];
                if (currentBook == command[1]) {
                    shelf.splice(i, 1);
                }
            }

        } else if (command[0] == 'Swap Books') {
            if (shelf.includes(command[1]) && shelf.includes(command[2])) {
                let book1 = shelf.indexOf(command[1]);
                let book2 = shelf.indexOf(command[2]);
                let temp = shelf[book1];
                shelf[book1] = shelf[book2]
                shelf[book2] = temp;

            }

        } else if (command[0] == 'Insert Book') {
            if (!shelf.includes(command[1])) {
                shelf.push(command[1])
            }

        } else if (command[0] == 'Check Book') {
            if (command[1] >= 0 && command[1] < shelf.length) {
                console.log(shelf[command[1]]);
            }

        }
        index++
        input = arr[index];
    }

    console.log(shelf.join(", "));

}
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    'Insert Book | Hello',
    'Check Book | 2',
    "Done"]);