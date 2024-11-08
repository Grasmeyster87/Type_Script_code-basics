var user41 = {
    firstName: 'Mark',
    pointCount: 100,
};
var Car = (function () {
    function Car(seats, colour, canHavePassengers, fuelPer100Kilometers) {
        this.seats = seats;
        this.colour = colour;
        this.canHavePassengers = canHavePassengers;
        this.fuelPer100Kilometers = fuelPer100Kilometers;
    }
    Car.prototype.calcFuelNeeded = function (distance) {
        return (this.fuelPer100Kilometers / 100) * distance;
    };
    return Car;
}());
var porche = new Car(4, 'red', true, 20);
console.log(porche.calcFuelNeeded(200));
//# sourceMappingURL=41.%20About_interfaces.js.map