function addressBook(arr) {
    let addressInfo = {};
    for (let contactInfo of arr) {

        let [name, address] = contactInfo.split(':');
        addressInfo[name] = address;
    }

    let entries = Object.entries(addressInfo).sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of entries) {
        let [name, address] = entry;
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);