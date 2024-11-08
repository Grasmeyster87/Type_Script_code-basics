var Phonebook = (function () {
    function Phonebook() {
        this.data = {};
    }
    Object.defineProperty(Phonebook.prototype, "entries", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Phonebook.prototype.get = function (key) {
        if (this.data[key]) {
            return this.data[key];
        }
        else {
            return null;
        }
    };
    ;
    Phonebook.prototype.set = function (key, value) {
        this.data[key] = value;
    };
    ;
    return Phonebook;
}());
Примеры: var myNote = new Phonebook();
myNote.set('help', 911);
myNote.get('help');
//# sourceMappingURL=43.%20Implementation_of_interfaces_by_classes.js.map