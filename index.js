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
};

class GameBoard {
  constructor(/* size of the board */) {

  }
}

var GameLogic = function() {
  var winner = false;
  var theGame = {};
  console.log('Welcome to Command Line Tic Tac Toe!');

  rl.question('Start the game? ', (answer) => {
    // while (winner === false) {
      if (answer !== 'yes') {
        console.log('Good Bye!');
        rl.close();
      } else {
        theGame = new Game();
        showBoard();
        makeAMove();
        // rl.close();
      }
    // }
  });
}();

var showBoard = function() {
  console.log('Your board:\n');
  for (var i = 0; i < board.length; i++) {
    console.log(board[i] + '\n');
  }
};

var makeAMove = function() {
  rl.question('Your next move? (e.g. 1,2) ', (answer) => {
    var move = answer.split(',');
    board[move[0]][move[1]] = 'X';
    showBoard();
  });
};
