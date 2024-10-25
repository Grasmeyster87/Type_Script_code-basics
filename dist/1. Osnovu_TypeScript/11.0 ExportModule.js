"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
exports.default = helloWorld;
exports.helloWorld1 = helloWorld1;
exports.helloWorldAgain = helloWorldAgain;
function helloWorld() {
    console.log("Hello, world!");
}
function helloWorld1() { }
function helloWorldAgain() { }
var Company;
(function (Company) {
    function isEmployeeEmail(email, domen) {
        console.log(email.split('@')[1] === domen);
        if (email.split('@')[1] === domen) {
            return true;
        }
        else {
            return false;
        }
    }
    Company.isEmployeeEmail = isEmployeeEmail;
})(Company || (exports.Company = Company = {}));
//# sourceMappingURL=11.0%20ExportModule.js.map