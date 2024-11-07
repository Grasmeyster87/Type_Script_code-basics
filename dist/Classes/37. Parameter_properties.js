var CustomFile37 = (function () {
    function CustomFile37(name, size) {
        this.name = name;
        this.size = size;
    }
    CustomFile37.prototype.toString = function () {
        return "".concat(this.name, " (").concat(this.size, " bytes)");
    };
    return CustomFile37;
}());
var file37 = new CustomFile37('open-world.jpeg', 1000);
console.log(file37);
//# sourceMappingURL=37.%20Parameter_properties.js.map