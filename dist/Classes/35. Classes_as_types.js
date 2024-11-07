var CustomFile2 = (function () {
    function CustomFile2(options) {
        this.name = options.name;
        this.size = options.size;
        this.isCopy = (options instanceof CustomFile2);
    }
    CustomFile2.prototype.toString = function () {
        var copyString = this.isCopy ? '(copy) ' : '';
        return "".concat(copyString).concat(this.name, " (").concat(this.size, " bytes)");
    };
    return CustomFile2;
}());
var file1 = new CustomFile2({ name: 'open-world.jpeg', size: 1000 });
console.log(file1.toString());
var file2 = new CustomFile2(file1);
console.log(file2.toString());
var file3 = new CustomFile2(file2);
console.log(file3.toString());
//# sourceMappingURL=35.%20Classes_as_types.js.map