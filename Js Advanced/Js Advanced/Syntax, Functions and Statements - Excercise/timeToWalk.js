function timeToWalk(steps, footprintMeters, speedKMH) {
  // Every 500 meters the student rests and takes a 1-minute break.
  let distance = steps * footprintMeters;
  let speedPer1Km = 60 / speedKMH;
  let timeNeeded = (distance / 1000) * speedPer1Km;
  let rests = Math.floor(distance / 500);
  timeNeeded += rests;

  let sec = Math.round((timeNeeded * 60) % 60);
  let min = Math.floor(timeNeeded);
  let hour = Math.floor(min / 60);
  min -= hour * 60;

  let hoursToPrint = hour < 10 ? `0${hour}` : `${hour}`;
  let minsToPrint = min < 10 ? `0${min}` : `${min}`;
  let secsToPrint = sec < 10 ? `0${sec}` : `${sec}`;

  console.log(`${hoursToPrint}:${minsToPrint}:${secsToPrint}`);
}
timeToWalk(4000, 0.6, 5);

// function timeToWalk(steps, footprintMeters, speedKMH) {
//   // Every 500 meters the student rests and takes a 1-minute break.
//   let distance = steps * footprintMeters;
//   let speedMeterInSec = speedKMH / 3.6;
//   let time = distance / speedMeterInSec;
//   let rests = Math.floor(distance / 500);
//   time += rests * 60;

//   let sec = Math.round(time % 60);
//   let min = Math.floor(time / 60);
//   let hour = Math.floor(min / 60);
//   min -= hour * 60;

//   let hoursToPrint = hour < 10 ? `0${hour}` : `${hour}`;
//   let minsToPrint = min < 10 ? `0${min}` : `${min}`;
//   let secsToPrint = sec < 10 ? `0${sec}` : `${sec}`;
//   console.log(`${hoursToPrint}:${minsToPrint}:${secsToPrint}`);
// }
// timeToWalk(4000, 0.6, 5);
