var fruits = ['banana', 'mango', 'apple'];
var upperFruits = fruits.map(function (name) { return name.toUpperCase(); });
var toUpper = function (name) { return name.toUpperCase(); };
var upperFruits1 = fruits.map(toUpper);
var numbers = [1, 3, 8, 9, 100, 23, 55, 34];
var getEvenNumbers = function () { return numbers.filter(function (item) { return item % 2 === 0; }); };
console.log(getEvenNumbers);
//# sourceMappingURL=5.%20Anonymous_Functions.js.map