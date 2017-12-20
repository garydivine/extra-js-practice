let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;

let numberOfBirthsPerWeek = startingPopulation * birthRate;

let totalNumberOfBirths = (numberOfBirthsPerWeek * numberOfWeeks) + startingPopulation;

console.log(`There will be ${totalNumberOfBirths} Cherokee Hares after ${numberOfWeeks} weeks.`);