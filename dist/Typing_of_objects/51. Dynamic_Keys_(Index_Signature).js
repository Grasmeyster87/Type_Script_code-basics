var buildSalaryStatistics = function (employees) {
    var salaries = Object.values(employees);
    var min = Math.min.apply(Math, salaries);
    var max = Math.max.apply(Math, salaries);
    var avg = salaries.reduce(function (acc, salary) { return acc + salary; }, 0) / salaries.length;
    return { min: min, max: max, avg: avg };
};
var employees = {
    mango: 100,
    poly: 50,
    ajax: 150,
};
employees.ironMan = 1000;
buildSalaryStatistics(employees);
//# sourceMappingURL=51.%20Dynamic_Keys_(Index_Signature).js.map