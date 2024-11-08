var superMan = {
    canFly: true,
    isLiving: true,
    canCarryPeople: true,
    guessWho: function (guess) { return (guess.toLowerCase() !== 'superman' ? "It's a ".concat(guess, "?") : "It's a ".concat(guess, "!")); },
};
console.log(superMan.guessWho('bird'));
console.log(superMan.guessWho('plane'));
"It's a plane?";
console.log(superMan.guessWho('superman'));
"It's a superman!";
//# sourceMappingURL=42.%20Using_interfaces.js.map