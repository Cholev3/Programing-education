function phoneBook(arr) {
    let phonebook = {};
    for (let contactInfo of arr) {

        let [name, number] = contactInfo.split(' ');
        phoneBook[name] = number;
    }
    let entries = Object.entries(phoneBook);
    for (let entry of entries) {
        let [name, number] = entry;
        console.log(`${name} -> ${number}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);