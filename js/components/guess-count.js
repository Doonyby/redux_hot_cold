var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var GuessCount = React.createClass({
	render: function() {
		var numList = this.props.numArray.toString(' ');
		return (
			<div className="guessCount" key="guessCountDiv">
				<h3>{this.props.title}</h3>
				<h4>{numList}</h4>
			</div>
		);
	}
});

var Container = connect()(GuessCount);

module.exports = Container;
