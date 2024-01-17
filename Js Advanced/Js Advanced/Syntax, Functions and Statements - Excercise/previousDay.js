function previousDay(year, month, day) {
  let newDate = new Date(year, month - 1, day);
  newDate.setDate(newDate.getDate() - 1);
  console.log(
    `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
  );
}
previousDay(2016, 9, 30);
