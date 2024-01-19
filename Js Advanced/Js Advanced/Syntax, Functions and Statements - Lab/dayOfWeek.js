function dayOfWeek(input) {
    let weekDays = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }

    let result = input in weekDays ? console.log(weekDays[input]) : console.log('error');
    return result;
}
dayOfWeek('Monday');