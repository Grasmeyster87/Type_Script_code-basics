var items = [];
items.push(1);
items.push('code-basics');
var sentence = 'table cat table dog dog apple table';
var words = sentence.split(' ');
var initial = {};
function getParams(query) {
    var parts = query.split('&');
    var init = {};
    var result = parts.reduce(function (acc, part) {
        var _a = part.split('='), key = _a[0], value = _a[1];
        acc[key] = value;
        return acc;
    }, init);
    return result;
}
getParams('per=10&page=5');
getParams('name=hexlet&count=3&order=asc');
//# sourceMappingURL=10.%20Type_Any.js.map