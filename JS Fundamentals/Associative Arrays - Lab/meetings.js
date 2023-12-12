function meetings(arr) {
    let schedule = {};

    for (let appointment of arr) {
        let [day, name] = appointment.split(' ');
        if (day in schedule) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);

        }
    }

    let entries = Object.entries(schedule);
    for (let entry of entries) {
        let [day, name] = entry;
        console.log(`${day} -> ${name}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);