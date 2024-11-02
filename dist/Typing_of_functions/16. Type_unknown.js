var value = 'code-basics';
function isError(value) {
    return value instanceof Error;
}
function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
;
console.log(isPlainObject(1));
console.log(isPlainObject('hexlet'));
console.log(isPlainObject({}));
console.log(isPlainObject({ name: 'code-basics' }));
console.log(isPlainObject([1, 8]));
isPlainObject(1);
isPlainObject('hexlet');
isPlainObject({});
isPlainObject({ name: 'code-basics' });
isPlainObject([1, 8]);
//# sourceMappingURL=16.%20Type_unknown.js.map