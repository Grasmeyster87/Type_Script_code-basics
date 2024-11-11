var merge = function (coll1, coll2) {
    var result = [];
    result.push.apply(result, coll1);
    result.push.apply(result, coll2);
    return result;
};
function merge44_1(coll1, coll2) {
    var result = [];
    result.push.apply(result, coll1);
    result.push.apply(result, coll2);
    return result;
}
merge([1, 2], [3, 4]);
merge(['one', 'two'], ['three']);
function first(coll) {
    return coll.length > 0 ? coll[0] : null;
}
first([]);
first([3, 2]);
first(['code-basics', 'hexlet']);
function last44(coll) {
    return coll.length > 0 ? coll[coll.length - 1] : null;
}
console.log(last44([]), last44([3, 2]), last44(['code-basics', 'hexlet']));
//# sourceMappingURL=44.%20Introduction_to_Generics.js.map