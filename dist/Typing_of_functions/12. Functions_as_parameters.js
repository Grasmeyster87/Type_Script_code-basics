function process(callback) {
    var value = callback();
}
function process1(callback) {
    var value = callback();
}
function process3(callback) { }
function process4(callback) { }
function process5(callback) { }
function process6(callback) {
    var value = callback(10);
}
function process7(callback) {
    var value = callback(10);
}
function filter(arrnumbers, callback) {
    console.log(arrnumbers.filter(callback));
    return arrnumbers.filter(callback);
}
var numbers12 = [1, -5, 2, 3, 4, 133];
filter(numbers12, function (n) { return n > 3; });
filter(numbers12, function (n) { return n % 2 == 0; });
//# sourceMappingURL=12.%20Functions_as_parameters.js.map