function bossRush(arr) {
    let numOfInputs = arr.shift();
    let index = 0;
    let input = arr[index];
    let pattern = /\|(?<name>[A-Z][A-Z][A-Z][A-Z]+)\|[\w\s]*:[\w\s]*#(?<title>[A-za-z]+ [A-za-z]+)#/;

    while (input >= numOfInputs) {
        let match = input.match(pattern);

        if (match) {
            let { name, title } = match.groups;

            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
        index++
        input = arr[index];
    }
}
// bossRush(['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|ALEX|:#Assistant Game Developer#']);
bossRush(['3',

'|STEFAN|:#H1gh Overseer#',

'|IVAN|:#Master detective#',

'|KARL|: #Marketing lead#']);