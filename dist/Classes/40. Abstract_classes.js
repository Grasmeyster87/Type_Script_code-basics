var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clock = (function () {
    function Clock(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    Clock.prototype.tick = function () {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
        }
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1;
        }
        if (this.hours === 24) {
            this.hours = 0;
        }
    };
    return Clock;
}());
var Clock24 = (function (_super) {
    __extends(Clock24, _super);
    function Clock24() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clock24.prototype.render = function () {
        var currentHour = this.hours % 24;
        var hours = currentHour.toString().padStart(2, '0');
        var minutes = this.minutes.toString().padStart(2, '0');
        return "".concat(hours, " : ").concat(minutes);
    };
    return Clock24;
}(Clock));
var clock24 = new Clock24(23, 59, 59);
console.log(clock24.render());
clock24.tick();
console.log(clock24.render());
var Clock12 = (function (_super) {
    __extends(Clock12, _super);
    function Clock12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clock12.prototype.render = function () {
        var timeType = this.hours > 12 ? 'PM' : 'AM';
        var currentHour = this.hours > 12 ? this.hours - 12 : this.hours;
        if (timeType === 'AM' && this.hours === 0) {
            currentHour = 12;
        }
        var hours = currentHour.toString().padStart(2, '0');
        var minutes = this.minutes.toString().padStart(2, '0');
        return "".concat(hours, " : ").concat(minutes, " ").concat(timeType);
    };
    return Clock12;
}(Clock));
var clock12 = new Clock12(23, 59, 59);
console.log(clock12.render());
clock12.tick();
console.log(clock12.render());
//# sourceMappingURL=40.%20Abstract_classes.js.map