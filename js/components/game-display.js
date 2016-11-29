var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');

var Status = require('./status');
var GuessCount = require('./guess-count');

var GameDisplay = React.createClass({
	guessedNumber: function(event) {
		event.preventDefault();
		var guess = event.target.firstChild.value;
		var guessNum = this.props.dispatch(actions.guessNumber(guess));
		var compareGuess = this.props.dispatch(actions.compareGuesses());
		var checkCorrect = this.props.dispatch(actions.checkCorrect());
		var evalGuess = this.props.dispatch(actions.evalGuess());
		var countGuess = this.props.dispatch(actions.countGuess());
		event.target.firstChild.value = '';
	},
	render: function() {
		return (
			<div className="gameDisplay" key="gameDisplayDiv">
				<Status key="status" title="Game Status" currentResult={this.props.game.result} />
				<form onSubmit={this.guessedNumber}>
					<input type="number" placeholder="Enter your Guess" />
					<button type="submit">Guess</button>
				</form>
				<GuessCount key="guessCount" title="Count of guesses" numArray={this.props.game.guesses}
				guessCount={this.props.game.count} />

			</div>
		);
	}
});

var Container = connect()(GameDisplay);
module.exports = Container;
