function hogwarts(arr) {
    let spell = arr.shift();
    let command = arr.shift();

    while (command != 'Abracadabra') {
        let currentComand = command.split(' ');
        let spellName = currentComand[0]

        if (spellName == 'Abjuration') {
            spell = spell.toUpperCase();
            console.log(spell);
        } else if (spellName == 'Necromancy') {
            spell = spell.toLowerCase();
            console.log(spell);
        } else if (spellName == 'Illusion') {
            let index = currentComand[1];
            let toAdd = currentComand[2];
            if (index >= 0 && index < spell.length) {
                spell = spell.split('');
                spell.splice(index, 1, toAdd);
                spell = spell.join('');
                console.log('Done!');
            } else {
                console.log('The spell was too weak.');
            }
        } else if (spellName == 'Divination') {
            let firstSubStr = currentComand[1];
            let seconSubStr = currentComand[2];
            let index = spell.indexOf(firstSubStr)
            if (index >= 0) {
                spell = spell.split(firstSubStr).join(seconSubStr);
                console.log(spell);
            }
        } else if (spellName == 'Alteration') {
            let toRemove = currentComand[1];
            let index = spell.indexOf(toRemove)

            if (index >= 0) {
                spell = spell.split('')
                spell.splice(index, toRemove.length);
                spell = spell.join('')
                console.log(spell);
            }
        } else {
            console.log('The spell did not work!');
        }

        command = arr.shift();
    }
}
hogwarts(["SwordMaster",

    "Target Target Target",

    "Abjuration",

    "Necromancy",

    "Alteration master",

    "Abracadabra"]);