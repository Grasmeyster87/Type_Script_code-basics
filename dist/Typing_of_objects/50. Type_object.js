function toString(obj) {
    return obj.toString();
}
toString('wow');
toString(123);
toString({});
function toString(obj) {
    return obj.toString();
}
toString('wow');
toString(123);
toString({});
function extract(object, keys) {
    return keys.reduce(function (accumulator, key) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            accumulator[key] = object[key];
        }
        return accumulator;
    }, {});
}
var user50 = {
    name: 'Tirion',
    email: 'tirion@lanister.got',
    age: 35,
};
extract(user50, ['name', 'age']);
//# sourceMappingURL=50.%20Type_object.js.map