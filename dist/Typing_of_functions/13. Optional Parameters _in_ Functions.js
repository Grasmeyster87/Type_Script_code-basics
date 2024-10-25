function split(str, separator) { }
function map(arr, callback) {
    var res = [];
    res = arr.map(callback);
    return res;
}
map([3, 9], function (n) { return n - 3; });
console.log(map([3, 9], function (n) { return n - 3; }));
map([8, 9], function (n) { return n + 8; });
console.log(map([8, 9], function (n) { return n + 8; }));
map([8, 9], function (n, index) { return index + n; });
console.log(map([8, 9], function (n, index) { return index + n; }));
//# sourceMappingURL=13.%20Optional%20Parameters%20_in_%20Functions.js.map