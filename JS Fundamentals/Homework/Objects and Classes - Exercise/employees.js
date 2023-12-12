function employees(arr) {
    for (let name of arr) {

        let employeeObj = {
            name: name,
            personalNum: name.length
        }
        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNum}`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);