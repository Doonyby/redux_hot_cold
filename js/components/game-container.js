var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var GuessDisplay = require('./guess-display');
var Status = require('./status');

var GuessCount = require('./guess-count');

var GameContainer = React.createClass({
	render: function() {
		return (
			<div className="gameContainter" key="gameContainerDiv">
				<h3>{this.props.title}</h3>
				<GuessDisplay game={this.props.game} key="guessDisplay" title="Guess Display w/ form"/>
			</div>
		);
	}
});

var Container = connect()(GameContainer);

module.exports = Container;
