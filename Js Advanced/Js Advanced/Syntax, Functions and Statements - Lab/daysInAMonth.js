function daysInAMonth(month, year) {
  let days = new Date(year, month);
  days.setDate(days.getDate() - 1);
  //   if (month == 2) {
  //     if (year % 4 == 0) {
  //       days = 29;
  //     } else {
  //       days = 28;
  //     }
  //   } else if (
  //     month == 1 ||
  //     month == 3 ||
  //     month == 5 ||
  //     month == 7 ||
  //     month == 8 ||
  //     month == 10 ||
  //     month == 12
  //   ) {
  //     days = 31;
  //   } else {
  //     days = 30;
  //   }
  console.log(days.getDate());
}
daysInAMonth(2, 2021);
