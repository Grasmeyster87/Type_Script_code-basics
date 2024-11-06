var val = 10;
val = 'My string';
var concat26 = function (base, suffix) { return "".concat(base).concat(suffix); };
function lastIndex(str, char) {
    var val4 = '';
    str.toString()
        .split('')
        .forEach(function (element, index) {
        if (element === char) {
            return (val4 = index);
        }
        else if (index == str.toString().split('').length - 1) {
            val4 = null;
        }
    });
    return val4;
}
var str = 'test';
lastIndex(str, 't');
lastIndex(str, 'p');
//# sourceMappingURL=26.%20%D0%9E%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20(Union%20Types).js.map