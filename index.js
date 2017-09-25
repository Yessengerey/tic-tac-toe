const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var board = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//
//   rl.close();
// });

class Game {
  constructor(players) {
    this.numOfPlayers = players;
  }
}

var GameLogic = function() {
  var theGame = new Game(2);
  console.log('Welcome to Command Line Tic Tac Toe!');
}();
