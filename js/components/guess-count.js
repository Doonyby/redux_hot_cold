var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');

var GuessCount = React.createClass({
	render: function() {
		var numList = this.props.numArray.join(', ');
		return (
			<div className="guessCount" key="guessCountDiv">
				<h4>Guess #{this.props.guessCount}!</h4>
				<h4>Already Guessed: {numList}</h4>
			</div>
		);
	}
});

var Container = connect()(GuessCount);
module.exports = Container;
