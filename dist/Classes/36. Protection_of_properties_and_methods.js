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
var CustomFile36 = (function () {
    function CustomFile36(options) {
        this.name = options.name;
        this.size = options.size;
    }
    CustomFile36.prototype.toString = function () {
        return "".concat(this.name, " (").concat(this.size, " bytes)");
    };
    return CustomFile36;
}());
var ImageCustomFile = (function (_super) {
    __extends(ImageCustomFile, _super);
    function ImageCustomFile(options) {
        var _this = _super.call(this, options) || this;
        _this.width = options.width;
        _this.height = options.height;
        return _this;
    }
    ImageCustomFile.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), " ").concat(this.width, "x").concat(this.height);
    };
    return ImageCustomFile;
}(CustomFile36));
var imageCustomFile = new ImageCustomFile({
    name: 'image.png',
    size: 100,
    width: 200,
    height: 300,
});
console.log(imageCustomFile.toString());
//# sourceMappingURL=36.%20Protection_of_properties_and_methods.js.map