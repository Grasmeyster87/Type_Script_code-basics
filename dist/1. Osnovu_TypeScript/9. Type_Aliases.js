var user10 = {
    firstName: 'Mike',
    pointsCount: 1000,
};
function getOlderUser(user11, user12) {
    if (user11.age > user12.age) {
        return user11;
    }
    else if (user11.age == user12.age) {
        return null;
    }
    else {
        return user12;
    }
}
//# sourceMappingURL=9.%20Type_Aliases.js.map