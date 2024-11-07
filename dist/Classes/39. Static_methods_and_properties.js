var UserResponse = (function () {
    function UserResponse(user) {
        this.user = user;
    }
    UserResponse.fromArray = function (users) {
        return users.map(function (user) { return new UserResponse(user); });
    };
    return UserResponse;
}());
var response = UserResponse.fromArray(['user1', 'user2', 'user3']);
console.log(response[0].user);
console.log(response[0] instanceof UserResponse);
//# sourceMappingURL=39.%20Static_methods_and_properties.js.map