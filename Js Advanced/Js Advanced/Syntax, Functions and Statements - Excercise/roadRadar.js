// function roadRadar(speed, area) {
//   let speedLimit;

//   if (area == "motorway") {
//     speedLimit = 130;
//   } else if (area == "interstate") {
//     speedLimit = 90;
//   } else if (area == "city") {
//     speedLimit = 50;
//   } else if ((area = "residential")) {
//     speedLimit = 20;
//   }

//   let difference = speed - speedLimit;
//   let status;

//   if (difference > 0 && difference <= 20) {
//     status = "speeding";
//   } else if (difference > 20 && difference <= 40) {
//     status = "excessive speeding";
//   } else if (difference > 40) {
//     status = "reckless driving";
//   }

//   if (speed <= speedLimit) {
//     console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
//   } else {
//     console.log(
//       `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
//     );
//   }
// }
// roadRadar(200, "motorway");

function roadRadar(speed, area) {
  const areaObj = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  let speedLimit;

  if (area in areaObj) {
    speedLimit = areaObj[area];
  }
  const difference = speed - speedLimit;
  let status;

  if (difference > 0 && difference <= 20) {
    status = "speeding";
  } else if (difference > 20 && difference <= 40) {
    status = "excessive speeding";
  } else if (difference > 40) {
    status = "reckless driving";
  }

  if (speed <= speedLimit) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  }
}
roadRadar(200, "motorway");
