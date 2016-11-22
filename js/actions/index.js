// generate a random number
var GEN_NUMBER = 'GEN_NUMBER';
var genNumber = function(number) {
	return {
		type: GEN_NUMBER,
		number: number
	}
};
// guess a number
var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guess) {
	return {
		type: GUESS_NUMBER,
		guess: guess
	}
};
// check if guessed number has been guessed
var COMPARE_GUESSES = 'COMPARE_GUESSES';
var compareGuesses = function(guess) {
	return {
		type: COMPARE_GUESSES,
		guess: guess
	}
};
// check if the number is correct
var CHECK_CORRECT = 'CHECK_CORRECT';
var checkCorrect = function(guess, number) {
	return {
		type: CHECK_CORRECT,
		guess: guess,
		number: number
	}
};
// evaluate how close number is if not correct
var EVAL_GUESS = 'EVAL_GUESS';
var evalGuess = function(guess, number) {
	return {
		type: EVAL_GUESS,
		guess: guess,
		number: number
	}
};
//display hot or cold
// display guessed number in the bottom so you don't guess again.

// reset number guess and guesses in game.
var RESET_GAME = 'RESET_GAME';
var resetGame = function() {
	return {
		type: RESET_GAME
	}
}

exports.GEN_NUMBER = GEN_NUMBER;
exports.genNumber = genNumber;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.COMPARE_GUESSES = COMPARE_GUESSES;
exports.compareGuesses = compareGuesses;
exports.CHECK_CORRECT = CHECK_CORRECT;
exports.checkCorrect = checkCorrect;
exports.EVAL_GUESS = EVAL_GUESS;
exports.evalGuess = evalGuess;
exports.RESET_GAME = RESET_GAME;
exports.resetGame = resetGame;