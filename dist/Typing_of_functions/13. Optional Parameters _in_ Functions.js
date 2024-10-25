function split(str, separator) {
}
function split1(str, separator) {
    if (separator === void 0) { separator = ','; }
}
split('hexlet');
split('hexlet,code-basics', ',');
function filter(coll, callback) {
    var result = [];
    coll.forEach(function (n, index) {
        if (callback(n, index)) {
            result.push(n);
        }
    });
    return result;
}
//# sourceMappingURL=13.%20Optional%20Parameters%20_in_%20Functions.js.map