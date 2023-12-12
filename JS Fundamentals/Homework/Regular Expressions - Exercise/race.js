function race(arr) {
    let participantsList = {};
    let racers = arr.shift().split(', ');

    for (let name of racers) {
        participantsList[name] = 0;
    }

    let command = arr.shift();
    let NamePattern = /[A-Z]|[a-z]+/g;
    let distancePattern = /\d/g;

    while (command != 'end of race') {
        let name = command.match(NamePattern).join('');
        let distance = command.match(distancePattern);
        distance = distance.map(Number).reduce((acc, val) => acc + val);

        if (name in participantsList) {
            participantsList[name] += distance;
        }

        command = arr.shift();
    }

    let racerResults = Object.entries(participantsList).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${racerResults[0][0]}`);
    console.log(`2nd place: ${racerResults[1][0]}`);
    console.log(`3rd place: ${racerResults[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);