var CustomFile = (function () {
    function CustomFile(_a) {
        var name = _a.name, size = _a.size;
        this.name = name;
        this.size = size;
    }
    CustomFile.prototype.toString = function () {
        return "".concat(this.name, " (").concat(this.size, " bytes)");
    };
    return CustomFile;
}());
var file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString());
//# sourceMappingURL=34.%20Classes.js.map