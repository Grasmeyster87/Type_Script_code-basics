function getGreetingPhrase(name) {
    return "Hello, ".concat(name.toUpperCase(), "!");
}
getGreetingPhrase('11');
function getGreetingPhrase1(name) {
    return "Hello, ".concat(name ? name.toUpperCase() : 'Guest', "!");
}
getGreetingPhrase1('Mike');
getGreetingPhrase1();
function getGreetingPhrase2(name) {
    if (name === void 0) { name = 'Guest'; }
    return "Hello, ".concat(name.toUpperCase(), "!");
}
getGreetingPhrase2();
function getGreetingPhrase3(name) {
    return "Hello, ".concat(name.toUpperCase(), "!");
}
//# sourceMappingURL=4.%20NameFunctions.js.map