function isPresence(value) {
    if (value === null || value === undefined) {
        return false;
    }
    if (typeof value === 'string') {
        if (value === '') {
            return false;
        }
    }
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return false;
        }
    }
    if (value instanceof Object) {
        if (Object.keys(value).length === 0) {
            return false;
        }
    }
    return true;
}
isPresence('');
isPresence({});
isPresence([]);
isPresence([1, 3]);
isPresence(10);
function last(value) {
    var strValue = value.toString();
    var lastChar = strValue.charAt(strValue.length - 1);
    return typeof value === 'string' ? lastChar : parseInt(lastChar, 10);
}
last('hexlet');
last(12345);
//# sourceMappingURL=20.%20Narrowing.js.map