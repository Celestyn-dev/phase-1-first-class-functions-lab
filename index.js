// Step 1: returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Step 2: returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Step 3: selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Step 4: createFareMultiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Step 5: fareDoubler
const fareDoubler = createFareMultiplier(2);

// Step 6: fareTripler
const fareTripler = createFareMultiplier(3);

// Step 7: selectDifferentDrivers
const selectDifferentDrivers = function(drivers, driverSelectorFunction) {
    return driverSelectorFunction(drivers);
};

// Example usage:
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers)); // ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(drivers));  // ['Amari', 'Mo']
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  // ['Amari', 'Mo']
console.log(fareDoubler(10)); // 20
console.log(fareTripler(10)); // 30

