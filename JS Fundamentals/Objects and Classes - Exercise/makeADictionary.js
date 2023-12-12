function makeADictionary(arr) {
    let dictionary = {};

    for (let input of arr) {
        let currentInput = JSON.parse(input);
        let term = Object.keys(currentInput).join('');
        let definition = Object.values(currentInput).join('');
        dictionary[term] = definition;
    }

    let entries = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of entries) {
        let term = entry[0];
        let definition = entry[1];

        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);