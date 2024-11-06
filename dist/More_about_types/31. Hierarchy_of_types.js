"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = 1;
var two = 2;
var notTrue = false;
num = two;
var unknownValue = 1;
unknownValue = 2;
unknownValue = false;
unknownValue = 'string';
unknownValue = 'string';
var neverValue;
var one = 1;
var num1 = one;
var aChar = 'a';
var str1 = aChar;
var num11 = 1;
var one11 = 1;
var two11 = num11;
var three = 3;
var defaultUser = { id: 0, name: '', age: 0 };
var getUserFriends = function (userResponseJSON, userId) {
    var userResponse = JSON.parse(userResponseJSON);
    return userResponse.friends
        .map(function (_a) {
        var ownerId = _a[0], friendId = _a[1];
        if (!(userId === ownerId || userId === friendId))
            return defaultUser;
        var searchId = (ownerId === userId) ? friendId : ownerId;
        var friend = userResponse.users.find(function (_a) {
            var id = _a.id;
            return id === searchId;
        });
        return friend === undefined ? defaultUser : friend;
    })
        .filter(function (user) { return user.id > 0; });
};
var userJson = JSON.stringify({
    users: [
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Mary', age: 21 },
    ],
    friends: [
        [1, 2],
    ],
});
getUserFriends(userJson, 1);
getUserFriends(userJson, 2);
getUserFriends(userJson, 3);
//# sourceMappingURL=31.%20Hierarchy_of_types.js.map