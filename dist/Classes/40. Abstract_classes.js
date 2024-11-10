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
//# sourceMappingURL=40.%20Abstract_classes.js.map