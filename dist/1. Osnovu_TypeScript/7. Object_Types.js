var user = {
    firstName: 'Mike',
    pointsCount: 1000,
};
function doSomething(user) {
}
doSomething({ firstName: 'Alice', pointsCount: 2000 });
doSomething({ firstName: 'Bob', pointsCount: 1800 });
function doSomething1(user) {
}
function isComplete(arrayname) {
    if (arrayname.lessons.length >= 4) {
        return true;
    }
    else {
        return false;
    }
}
var course = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
};
isComplete(course);
//# sourceMappingURL=7.%20Object_Types.js.map