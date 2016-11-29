var React = require('react');



var GuessDisplay = React.createClass({
	render: function() {
		return (
			<div className="guessDisplay" key="guessDisplayDiv">
				<h3>{this.props.title}</h3>
			</div>
		);
	}
});

module.exports = GuessDisplay;