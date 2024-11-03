function concat(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return "".concat(a.toFixed()).concat(b.toFixed());
    }
    return "".concat(a).concat(b);
}
concat('one', 'two');
concat(3, 5.34);
concat(1.33, 10);
//# sourceMappingURL=19.%20Function_Overloads.js.map