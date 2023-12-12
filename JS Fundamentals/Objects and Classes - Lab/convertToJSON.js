function convertToJSON(name, lastName, hair) {
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hair
    }
    let personJSON = JSON.stringify(person);
    console.log(personJSON);

}
convertToJSON('George', 'Jones', 'Brown');