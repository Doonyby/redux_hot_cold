var React = require('react');


var GuessCount = React.createClass({
	render: function() {
		return (
			<div className="guessCount" key="guessCountDiv">
				<h3>{this.props.title}</h3>
			</div>
		);
	}
});

module.exports = GuessCount;