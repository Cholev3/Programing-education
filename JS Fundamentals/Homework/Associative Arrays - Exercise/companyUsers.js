function companyUsers(arr) {
    let employeeInfo = {};

    for (let employee of arr) {
        let [company, number] = employee.split(' -> ');

        if (company in employeeInfo) {
            if (number == employeeInfo[company]) {

            } else {
                employeeInfo[company].push(number)
            }
        } else {
            employeeInfo[company] = [number];
        }

    }
    let entries = Object.entries(employeeInfo).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, numbers] of entries) {
        console.log(company);
        for (let idNumber of numbers) {
            console.log(`-- ${idNumber}`);
        }

    }
}
companyUsers(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);