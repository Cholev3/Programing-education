function secretChat(arr) {
    let message = arr.shift();
    let command = arr.shift();

    while (command != 'Reveal') {
        let currentCommand = command.split(':|:');
        if (currentCommand.length > 2) {
            let [action, substring, replacement] = currentCommand;
            message = message.split(substring).join(replacement);
            console.log(message);
        } else if (currentCommand[0] == 'Reverse') {
            let text = currentCommand[1];
            let index = message.indexOf(text);
            if (index >= 0) {
                let cutText = message.slice(index, index + text.length)
                message = message.split(cutText);
                cutText = cutText.split('').reverse().join('');
                message.push(cutText)
                message = message.join('')
                console.log(message);
            } else {
                console.log('error');
            }
        } else if (currentCommand[0] == 'InsertSpace') {
            let index = Number(currentCommand[1]);
            message = message.split('');
            message.splice(index, 0, ' ');
            message = message.join('')
            console.log(message);
        }


        command = arr.shift();
    }
    if (command == 'Reveal') {
        console.log(`You have a new text message: ${message}`);
    }
}
secretChat(['Hiware?uiy',

    'ChangeAll:|:i:|:o',

    'Reverse:|:?uoy',

    'Reverse:|:jd',

    'InsertSpace:|:3',

    'InsertSpace:|:7',

    'Reveal']);