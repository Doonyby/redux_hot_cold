var React = require('react');

var NewGame = React.createClass({
	render: function() {
		return (
			<div className="newGame" key="newGameDiv">
				<h3>{this.props.title}</h3>
				<button type="button" onClick={this.props.resetGame}>New Game</button>
			</div>
		);		
	}
});

module.exports = NewGame;