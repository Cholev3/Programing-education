function schoolGrades(arr) {
    let studentInfo = {};

    for (let input of arr) {
        let grades = input.split(' ');
        let name = grades.shift();
        for (let grade of grades) {
            if (name in studentInfo) {
                studentInfo[name] += grade;

            } else {
                studentInfo[name] = grade;
            }
        }
    }

    let entries = Object.entries(studentInfo).sort((a, b) => a[0].localeCompare(b[0]));
    for (let entry of entries) {
        let [name, grades] = entry;
        grades = grades.split('').map(Number).reduce((acc, val) => acc + val);
        avgGrade = grades / entry[1].length;
        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);