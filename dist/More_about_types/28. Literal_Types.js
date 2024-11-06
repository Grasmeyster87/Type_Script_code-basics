var startGame = function () {
    var state = ['turtle', null, null, null, null];
    var makeTurn = function (direction) {
        var turtleIndex = state.indexOf('turtle');
        var nextIndex = direction === 'left' ? turtleIndex - 1 : turtleIndex + 1;
        if (nextIndex < 0 || nextIndex > 4) {
            throw new Error('Out of bounds');
        }
        state[turtleIndex] = null;
        state[nextIndex] = 'turtle';
    };
    return { makeTurn: makeTurn, state: state };
};
var _a = startGame(), makeTurn = _a.makeTurn, state = _a.state;
console.log(state);
makeTurn('left');
makeTurn('right');
makeTurn('right');
console.log(state);
//# sourceMappingURL=28.%20Literal_Types.js.map