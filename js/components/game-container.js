var React = require('react');

var Status = require('./status');
var GuessDisplay = require('./guess-display');
var GuessCount = require('./guess-count');



var GameContainer = React.createClass({
	render: function() {
		return (
			<div className="gameContainter" key="gameContainerDiv">
				<h3>{this.props.title}</h3>
				<Status key="status" title="Game Status"/>
				<GuessDisplay key="guessDisplay" title="Guess Display w/ form"/>
				<GuessCount key="guessCount" title="Count of guesses"/>
			</div>
		);
	}
});

module.exports = GameContainer;