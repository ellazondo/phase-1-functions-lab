// Code your solution in this file!
const startingBlock = 42;
const someValue = 50;
function distanceFromHqInBlocks(someValue) {
  var dist = someValue - startingBlock;
  return Math.abs(dist);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  var dist = (destination - start) * 264;
  return dist < 0 ? -dist : dist;
}

function calculatesFarePrice(start, destination) {
  var distanceFeet = distanceTravelledInFeet(start, destination);
  if (distanceFeet <= 400) {
    return 0;
  } else if (distanceFeet >= 400 && distanceFeet <= 2000) {
    return (distanceFeet - 400) * 0.02;
  } else if (distanceFeet > 2000 && distanceFeet < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
