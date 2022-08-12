var GameboardModule = (function () {
    console.log("global module text")
    var gameboard = {}
    gameboard.generateGameboard = () => {
        console.log("I have generated a gameboard")
    }
    return gameboard;
})();
