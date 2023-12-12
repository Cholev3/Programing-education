function degustationParty(arr) {
    let guestList = {};
    let unlikedMeals = 0;

    let index = 0;
    let command = arr[index];

    while (command != 'Stop') {
        let splitInput = command.split('-');
        let [action, name, food] = splitInput;
        if (action == 'Like') {
            if (name in guestList) {
                if (!guestList[name].includes(food)) {
                    guestList[name].push(food)
                }
            } else {
                guestList[name] = [food];
            }
        } else if (action == 'Dislike') {
            if (name in guestList) {
                let index = guestList[name].indexOf(food);
                if (index >= 0) {
                    guestList[name].splice(index, 1);
                    unlikedMeals++;
                    console.log(`${name} doesn't like the ${food}.`);
                } else {
                    console.log(`${name} doesn't have the ${food} in his/her collection.`);
                }

            } else {
                console.log(`${name} is not at the party.`);
            }
        }
        index++
        command = arr[index];
    }

    let entries = Object.entries(guestList);

    for (let entry of entries) {
        let [name, food] = entry;
        food = food.join(', ');
        console.log(`${name}: ${food}`);
    }
    console.log(`Unliked meals: ${unlikedMeals}`);
}
// degustationParty(["Like-Krisi-shrimps", "Like-Krisi-soup", "Like-Penelope-dessert", "Like-Misho-salad", "Stop"]);
// degustationParty(["Like-Krisi-shrimps", "Dislike-Vili-carp", "Dislike-Krisi-salad", "Stop"]);
degustationParty(["Like-Katy-fish", "Dislike-Katy-fish", "Stop"]);