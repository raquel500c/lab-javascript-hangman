function Hangman (){
  this.words      = ["IRONHACK", "NODEJS", "JAVASCRIPT", "METEOR", "ANGULAR"];
  this.secretWord = this.getWord();
  this.letters     = [];
  this.errorsLeft = 10;
};

Hangman.prototype.getWord = function () {
  var random = Math.floor(Math.random() * this.words.length );
  return this.words[random];
};

Hangman.prototype.askLetter = function (letter) {


  if (this.letters.indexOf(letter) > -1) {
    return;
  }

  this.letters.push(letter);
  var correct = this.secretWord.indexOf(letter) > -1;

  if (!correct) {
    this.errorsLeft -= 1;
  }
  return correct;
};

Hangman.prototype.getWordStatus = function () {
  var that        = this;
  var splittedWord = this.secretWord.split("");

  return splittedWord.map(function (letter) {
      return that.letters.indexOf(letter) > -1
          ? letter
          : "_";
  })
};

Hangman.prototype._isFinished = function () {
  return this.getWordStatus().indexOf("_") < 0;
};

Hangman.prototype._gameOver = function () {
  return this.errorsLeft === 0;
};

Hangman.prototype.gameStatus = function () {
  if (this._isFinished()) {
    return "You Win";
  } else if (this._gameOver()) {
    return "Game Over";
  }
};
