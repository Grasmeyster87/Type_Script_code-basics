var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function unique(array) {
    return __spreadArray([], Array.from(new Set(array)), true);
}
unique([9, 9, 3, 8, 8]);
unique(['twinkle', 'twinkle', 'little', 'bat']);
unique([1, 1, 3, 'oops!']);
//# sourceMappingURL=21.%20Type_Annotations.js.map