var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');

var NewGame = React.createClass({
	resetGame: function() {
		console.log('reseting game');
		this.props.dispatch(actions.resetGame());
	},

	render: function() {
		return (
			<div className="newGame" key="newGameDiv">
				<h3>{this.props.title}</h3>
				<button type="button" onClick={this.resetGame}>New Game</button>
			</div>
		);		
	}
});

var Container = connect()(NewGame);

module.exports = Container;