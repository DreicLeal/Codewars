//https://www.codewars.com/kata/58ca658cc0d6401f2700045f
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const distanceTest = mpg*fuelLeft >= distanceToPump ? true:false
  
  return distanceTest
 };

 