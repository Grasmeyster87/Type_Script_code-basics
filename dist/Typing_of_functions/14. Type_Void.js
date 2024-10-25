var numbers14 = [1, 2, 3];
var result14 = [];
var f = function () { return true; };
var v = f();
function forEach(arr, callback) {
    arr.forEach(function (n, index) { return callback(n, index); });
}
forEach([1, 2, 3], function (n) { return console.log(n); });
var result = [];
forEach([1, 2, 3], function (n) { return result.push(n); });
forEach([8, 9], function (n, index) { return console.log(index + n); });
//# sourceMappingURL=14.%20Type_Void.js.map