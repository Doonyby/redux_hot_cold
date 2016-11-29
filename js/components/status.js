var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Status = React.createClass({
	render: function() {
		var result;
		if (this.props.currentResult) {
			result = this.props.currentResult;
		}
		else {
			result = 'Make a Guess!'
		}
		return (
			<div className="status" key="statusDiv">
				<h4>{result}</h4>
			</div>
		);
	}
});

var Container = connect()(Status);
module.exports = Container;
