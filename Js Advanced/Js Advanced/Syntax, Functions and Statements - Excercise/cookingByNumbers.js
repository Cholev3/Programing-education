function cookingByNumbers(num, com1, com2, com3, com4, com5) {
  let comArr = [com1, com2, com3, com4, com5];

  for (let com of comArr) {
    let commandObj = {
      chop: num / 2,
      dice: Math.sqrt(num),
      spice: num + 1,
      bake: num * 3,
      fillet: (num * 0.8).toFixed(1),
    };

    num = commandObj[com];
    console.log(num);
  }
}
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
