// Главное отличие unknown от any связано с проверкой типов. unknown запрещает выполнять любые операции:

let value: unknown = 'code-basics';

// value.toUpperCase();
// value.trim();

function isError(value: unknown): boolean {
    return value instanceof Error;
}

function isPlainObject(value: any): value is object {
    // return typeof value === 'object';
    return Object.prototype.toString.call(value) === '[object Object]'
};

console.log(isPlainObject(1));
console.log(isPlainObject('hexlet'));
console.log(isPlainObject({}));
console.log(isPlainObject({ name: 'code-basics' });
console.log(isPlainObject([1, 8]));

isPlainObject(1); // false
isPlainObject('hexlet'); // false
isPlainObject({}); // true
isPlainObject({ name: 'code-basics' }); // true
isPlainObject([1, 8]); // false