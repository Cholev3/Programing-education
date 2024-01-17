function buyFruit(fruit, gramsWeight, price) {
  let weightInKg = gramsWeight / 1000;
  let moneyNeeded = weightInKg * price;

  console.log(
    `I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
buyFruit("apple", 1563, 2.35);
