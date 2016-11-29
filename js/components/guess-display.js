var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');

var Status = require('./status');
var GuessCount = require('./guess-count');

var GuessDisplay = React.createClass({
	guessedNumber: function(event) {
		event.preventDefault();
		var guess = event.target.firstChild.value;
		var guessNum = this.props.dispatch(actions.guessNumber(guess));
		console.log('guessNum', guessNum);
		var compareGuess = this.props.dispatch(actions.compareGuesses());
		console.log('comparGuess', compareGuess);
		var checkCorrect = this.props.dispatch(actions.checkCorrect());
		console.log('checkCorrect', checkCorrect);
		var evalGuess = this.props.dispatch(actions.evalGuess());
		console.log('evalGuess', evalGuess);
		var countGuess = this.props.dispatch(actions.countGuess());
		console.log('countGuess', countGuess);
	},
	render: function() {
		return (
			<div className="guessDisplay" key="guessDisplayDiv">
				<h3>{this.props.title}</h3>
				<Status key="status" title="Game Status" currentResult={this.props.game.result} />
				<form onSubmit={this.guessedNumber}>
					<input type="number" placeholder="Enter your Guess" />
					<button type="submit">Guess</button>
				</form>
				<GuessCount key="guessCount" title="Count of guesses" numArray={this.props.game.guesses} />

			</div>
		);
	}
});

var Container = connect()(GuessDisplay);

module.exports = Container;
