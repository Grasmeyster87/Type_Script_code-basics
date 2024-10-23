const fruits = ['banana', 'mango', 'apple'];
const upperFruits = fruits.map((name) => name.toUpperCase());
// ['BANANA', 'MANGO', 'APPLE']

// Если функция определяется вне контекста, то к ней применяются те же правила, что и к именованным функциям. То есть типы параметров должны быть заданы во время определения:

const toUpper = (name: string): string => name.toUpperCase();
const upperFruits1 = fruits.map(toUpper);

const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

// BEGIN (write your solution here)
const getEvenNumbers = () => numbers.filter((item) => item % 2 === 0);

console.log(getEvenNumbers);
// END
