function sameNumbers(num) {
  let areSame = true;
  let numToStr = String(num);

  let letter = numToStr[0];
  let sum = 0;

  for (let currentLetter of numToStr) {
    if (currentLetter !== letter) {
      areSame = false;
    }
    sum += Number(currentLetter);
  }

  console.log(areSame);
  console.log(sum);
}
sameNumbers(1234);
