// let circleArea = input => typeof input == 'number' ? console.log((Math.PI * (input ** 2)).toFixed(2)) : console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);

function circleArea(input) {
    let isNumber = typeof input == 'number' ? console.log((Math.PI * (input ** 2)).toFixed(2)) : console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
}
circleArea(5);
circleArea('name');
