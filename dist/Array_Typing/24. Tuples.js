function isTheSamePoint(p1, p2) {
    return p1.every(function (el, i) { return el === p2[i]; });
}
var p1 = [1, 3, 4];
var p2 = [1, 3, 4];
var p3 = [0, 8, 4];
isTheSamePoint(p1, p2);
isTheSamePoint(p1, p3);
isTheSamePoint(p2, p3);
//# sourceMappingURL=24.%20Tuples.js.map