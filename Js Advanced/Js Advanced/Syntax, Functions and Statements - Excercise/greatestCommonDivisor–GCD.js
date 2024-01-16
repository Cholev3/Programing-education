function greatestCommonDivisor(a, b) {
  //   let gcd = a % b;

  //   while (gcd !== 0) {
  //     a = b;
  //     b = gcd;
  //     gcd = a % b;
  //   }

  //   console.log(b);

  let gcd = 0;
  let higherNum = a > b ? a : b;

  for (let i = 0; i <= higherNum; i++) {
    if ((a % i == 0) & (b % i == 0)) {
      if (i > gcd) {
        gcd = i;
      }
    }
  }
  console.log(gcd);
}
greatestCommonDivisor(15, 5);
