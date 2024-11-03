function concat(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return "".concat(a.toFixed()).concat(b.toFixed());
    }
    return "".concat(a).concat(b);
}
concat('one', 'two');
concat(3, 5.34);
concat(1.33, 10);
function newYearCongratulate(value1, value2) {
    if (typeof value1 === 'number') {
        return "Hi ".concat(value2, "! Happy New Year ").concat(value1, "!");
    }
    return "Hi ".concat(value1, "! Happy New Year!");
}
newYearCongratulate('John');
newYearCongratulate(2023, 'Mila');
//# sourceMappingURL=19.%20Function_Overloads.js.map